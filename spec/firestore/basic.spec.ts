import { setup, teardown } from "../helpers";
import { describe, test, expect, beforeAll, afterAll } from "bun:test";
import { mockFeedback, mockUser } from "../mockData";
import { addDoc, collection, CollectionReference, doc, DocumentReference, getDocs, setDoc } from "firebase/firestore";

describe("Database Rules", () => {

  let collAuthNonExistentRef: CollectionReference;
  let docAuthUnAuthorizedRef: DocumentReference;

  beforeAll(async() => {
    let authDB = await setup().authenticate(mockUser, mockFeedback);

    collAuthNonExistentRef = collection(authDB, "some-non-existent-collection");
    // an authenticated request but an unauthorized access to a document
    docAuthUnAuthorizedRef = doc(authDB, "some-collection/some-document");
  });

  afterAll(async() => {
    await teardown();
  });

  test("Fail when reading to non existent collection", async() => {
    expect(getDocs(collAuthNonExistentRef)).toDenyFirestore(); // auth
  });

  test("Fail when creating a collection that Egg does expect to exist", async() => {
    expect(addDoc(collAuthNonExistentRef, {} )).toDenyFirestore();
  });

  test("Fail when writing to a collection and document that doesn't exist", async() => {
    // 
    expect(setDoc(docAuthUnAuthorizedRef, {} )).toDenyFirestore();
  });

});


