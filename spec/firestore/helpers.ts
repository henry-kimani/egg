import { initializeTestEnvironment, assertFails, assertSucceeds } from "@firebase/rules-unit-testing";
import { doc, setDoc } from "firebase/firestore";
import { readFileSync } from "fs";
import type { mockFeedback } from "./mockData";
import { expect } from "bun:test";

const projectId = `rules-spec-${Date.now()}`;
const testEnvApp = await initializeTestEnvironment({
  projectId,
  firestore: {
    rules: readFileSync("firestore.rules", "utf-8"),
    port: 8080,
    host: "127.0.0.1",
  }
});

export function setup() {
  
  async function unAuthenticate(data: typeof mockFeedback) {
    const unAuth = testEnvApp.unauthenticatedContext();
    const db = unAuth.firestore();
    
    // Write mock data before rules
    if (data) {
      for (const key in data) {
        const docRef = doc(db, key);
        await setDoc(docRef, data[key]);
      }
    }

    return db;
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
  };
}

export async function teardown() {
  await testEnvApp.clearFirestore();
}
