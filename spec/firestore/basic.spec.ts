import { setup, teardown } from "../helpers";
import { describe, test, expect, beforeAll, afterAll } from "bun:test";
import { mockFeedback } from "../mockData";
import { addDoc, collection, getDocs } from "firebase/firestore";

describe("Database Rules", () => {

  let unAuthDB;
  let collRef;

  beforeAll(async() => {
    unAuthDB = await setup().unAuthenticate(mockFeedback);
    collRef = collection(unAuthDB, "some-non-existent-collection");
  });

  afterAll(async() => {
    await teardown();
  });

  test("fail when reading to an unauthorized document", async() => {
    expect(getDocs(collRef)).toDeny();
  });

  test("fail when writing to an unauthorized collection", async() => {
    expect(addDoc(collRef, {})).toDeny();
  });

});


