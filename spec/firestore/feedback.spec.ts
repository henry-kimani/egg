import { describe, expect, test, beforeAll, afterAll } from "bun:test";
import { setup, teardown } from "../helpers";
import { mockFeedback, mockUser } from "../mockData";
import { collection, getDocs, updateDoc, doc, setDoc, deleteField, deleteDoc, addDoc, serverTimestamp } from "firebase/firestore";

describe("Feedback Form Rules", () => {
  let authDB;
  let collRef;
  let docRef;

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
    expect(getDocs(collRef)).toDeny();
  });


  // Writes
  test("fail when updating feedback collection", () => {
    // Updating a specific field
    expect(updateDoc(docRef, { feedback: "hello" })).toDeny();

    // Updating, but will create a new field, since it does not exist
    expect(updateDoc(docRef, { greet: "hello" })).toDeny();
    expect(setDoc(docRef, { greet: "Hello" }, { merge: true })).toDeny();

    // Update an entire document
    expect(setDoc(docRef, { feedback: "Hello" })).toDeny();
  });

  test("fail when deleting to feedback collection", () => {
    // Delete a specific field or more
    expect(updateDoc(docRef, { feedback: deleteField() })).toDeny();

    // Delete a document from a collection
    expect(deleteDoc(docRef)).toDeny();
  });

  test("fail when creating empty/null to the feedback document", () => {
    expect(addDoc(collRef, {})).toDeny();
  })

  test("fail when submitting empty fields to a document", ()=> {
    expect(addDoc(collRef, { feedback: "", emoji: "", createdAt: "" })).toDeny();
  });

  test("fail when submitting invalid data types to the feedback collection", () => {
    // reject feedback as int and createdAt as int
    expect(addDoc(collRef, { feedback: 23, createdAt: 2900 })).toDeny();
    expect(setDoc(docRef, { feedback: 23, createdAt: 2900 })).toDeny();

    // reject feedback as int and createdAt as string
    expect(addDoc(collRef, { feedback: 23, createdAt: "" })).toDeny();
  });

  test("pass when creating to feedback collection", () => {
    // Creating a new document with random document id 
    expect(addDoc(collRef, { feedback: "Nice!", createdAt: serverTimestamp() })).toAllow();

    // Creating, updates the fields for that specific document
    expect(setDoc(docRef, { feedback: "Hola", createdAt: serverTimestamp() })).toDeny();
  });

});
