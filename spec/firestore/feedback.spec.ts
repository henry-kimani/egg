import { describe, expect, test, beforeAll, afterAll } from "bun:test";
import { setup, teardown } from "../helpers";
import { mockFeedback, mockUser } from "../mockData";
import { 
  collection, getDocs, updateDoc, doc, setDoc, deleteField, deleteDoc, addDoc, 
  serverTimestamp, CollectionReference, DocumentReference 
} from "firebase/firestore";

describe("Feedback Form Rules", () => {
  let authDB;
  let collRef: CollectionReference;
  let docRef: DocumentReference;

  beforeAll(async() => {
    authDB = await setup().authenticate(mockUser, mockFeedback);
    collRef = collection(authDB, "feedback");
    docRef = doc(authDB, Object.keys(mockFeedback)[0]);
  });

  afterAll(async()=> {
    await teardown();
  });


  // Read
  test("fail when reading to feedback collection", () => {
    expect(getDocs(collRef)).toDenyFirestore();
  });


  // Writes
  test("fail when creating empty/null fields to the feedback collection", () => {
    expect(
      addDoc(collRef, {})
    ).toDenyFirestore();
  })

  test("fail when submitting empty fields to the feedback collection document", ()=> {
    expect(
      addDoc(collRef, {
        uid: "", 
        feedback: "", 
        emoji: "", 
        createdAt: "" 
      })
    ).toDenyFirestore();
  });

  test("fail when submitting invalid data types to the feedback collection", () => {
    // reject uid as int, feedback as int and createdAt as int
    expect(
      addDoc(collRef, {
        uid: 123, 
        feedback: 23, 
        createdAt: 2900 
      })
    ).toDenyFirestore();
    expect(
      setDoc(docRef, {
        uid: 123, 
        feedback: 23, 
        createdAt: 2900 
      })
    ).toDenyFirestore();

    // reject feedback as int and createdAt as string
    expect(
      addDoc(collRef, {
        feedback: 23, 
        createdAt: "" 
      })
    ).toDenyFirestore();
  });

  test("fail when deleting a document in the feedback collection", () => {
    // Delete a specific field or more
    expect(
      updateDoc(docRef, {
        feedback: deleteField() 
      })
    ).toDenyFirestore();

    // Delete a document from a collection
    expect(
      deleteDoc(docRef)
    ).toDenyFirestore();
  });

  test("fail when updating feedback collection", () => {
    // Updating a specific field
    expect(
      updateDoc(docRef, {
        feedback: "hello" 
      })
    ).toDenyFirestore();

    // Creating, updates the fields for that specific document
    expect(
      setDoc(docRef, {
        feedback: "Hola",
        createdAt: serverTimestamp() 
      })
    ).toDenyFirestore();

    // Updating, but will create a new field, since it does not exist
    expect(
      updateDoc(docRef, {
        greet: "hello" 
      })
    ).toDenyFirestore();
    expect(
      setDoc(docRef, {
        greet: "Hello" 
      }, { merge: true }
      )
    ).toDenyFirestore();

    // Update an entire document
    expect(
      setDoc(docRef, {
        feedback: "Hello" 
      })
    ).toDenyFirestore();
  });

  test("pass when creating to feedback collection", () => {
    // Creating a new document with random document id 
    expect(
      addDoc(collRef, {
        uid: "1234",
        feedback: "Nice!", 
        createdAt: serverTimestamp()
      })
    ).toAllowFirestore();
  });
});
