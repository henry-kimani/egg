import { initializeTestEnvironment, assertFails, assertSucceeds } from "@firebase/rules-unit-testing";
import { doc, setDoc } from "firebase/firestore";
import { readFileSync } from "fs";
import type { mockFeedback, mockUser } from "./mockData";
import { expect } from "bun:test";

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

    writeMockData(db, data);

    return db;
  }

  async function unAuthenticate(data: typeof mockFeedback) {
    const unAuth = testEnvApp.unauthenticatedContext();
    const db = unAuth.firestore();
    
    // Write mock data before rules
    writeMockData(db, data); 

    return db;
  }

  async function writeMockData(db, data: typeof mockFeedback) {
    if (data) {
      for (const key in data){
        const docRef = doc(db, key);
        await setDoc(docRef, data[key]);
      }
    }
  }

  function customMatchers() {
    expect.extend({
      async toAllow(expectation) {
        let pass = false;
        try {
          await assertSucceeds(expectation);
          pass = true;
        } catch(err) { console.log(err) };
        return {
          pass,
          message: () => "Expected to succeed, but it failed."
        };
      },
      async toDeny(expectation) {
        let pass = false;
        try {
          await assertFails(expectation);
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
