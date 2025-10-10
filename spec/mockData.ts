import { serverTimestamp } from "firebase/firestore";
import type { FeedbackFormType } from "./definitions";

export const mockUser = {
  uid: "henryTest",
};

export const mockFeedback: FeedbackFormType = {
  "feedback/henryTest": {
    uid: "henry123",
    feedback: "Hello, henry here. I love this site of yours.",
    emoji: "",
    createdAt: serverTimestamp()
  }
};
