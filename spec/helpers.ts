import { initializeTestEnvironment, assertFails, assertSucceeds } from "@firebase/rules-unit-testing";
import { doc, setDoc } from "firebase/firestore";
import { readFileSync } from "fs";
import type { mockFeedback, mockUser } from "./mockData";
import { expect } from "bun:test";
import type { FeedbackFormType } from "./definitions";

const projectId = `rules-spec-${Date.now()}`;
const testEnvApp = await initializeTestEnvironment({
  projectId,
  firestore: {
    rules: readFileSync("firestore.rules", "utf-8"),
    port: 8080,
    host: "127.0.0.1",
  },
});

export function setup() {
  async function authenticate (user: typeof mockUser, data: typeof mockFeedback) {
    const auth = testEnvApp.authenticatedContext(user.uid);
    const db = auth.firestore();

    if (data) {
      for (const key in data){
        const docRef = doc(db, key);
        await setDoc(docRef, data[key]);
      }
    }

    return db;
  }

  async function unAuthenticate(data: FeedbackFormType) {
    const unAuth = testEnvApp.unauthenticatedContext();
    const db = unAuth.firestore();
    
    // Write mock data before rules
    if (data) {
      for (const key in data){
        const docRef = doc(db, key);
        await setDoc(docRef, data[key]);
      }
    }   

    return db;
  }

  function customMatchers() {
    expect.extend({
      async toAllowFirestore(actual: any) {
        let pass = false;
        try {
          await assertSucceeds(actual);
          pass = true;
        } catch(err) { console.log(err) };
        return {
          pass,
          message: () => "Expected to succeed, but it failed."
        };
      },
      async toDenyFirestore(actual: any) {
        let pass = false;
        try {
          await assertFails(actual);
          pass = true;
        } catch (err) { console.log(err) }
        return {
          pass,
          message: () => "Expected to fail, but succeeded."
        };
      }
    });
  }

  customMatchers();

  return {
    unAuthenticate,
    authenticate
  };
}

export async function teardown() {
  await testEnvApp.clearFirestore();
}
