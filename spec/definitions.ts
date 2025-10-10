import { FieldValue } from "firebase/firestore";

// Feedback form type
export type FeedbackFormType = {
  [x: string]: {
    uid: string;
    feedback: string;
    emoji: string;
    createdAt: FieldValue;
  }
};
