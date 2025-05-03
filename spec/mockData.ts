import { serverTimestamp } from "firebase/firestore";

export const mockUser = {
  uid: "henryTest",
};

export const mockFeedback = {
  "feedback/henryTest": {
    feedback: "Hello, henry here. I love this site of yours.",
    emoji: "",
    createdAt: serverTimestamp()
  },
  "feedback/hartTest": {
    feedback: "Hola, mama mia! mi love de site",
    emoji: "very-good",
    createdAt: serverTimestamp()
  }
};
