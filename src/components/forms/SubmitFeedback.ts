/*
 * This is a custom web component.
 *
 * Why? This is to make the component reusable.
 *
 * The constructor is called everytime the custom component is found on the page.
 * Hence we can safely write code for one component at a time without any conflicts
 * */

import { db } from "@firebase/client";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";

class SubmitFeedback extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const feedbackForm = this.querySelector('form');
    const feedbackFormInput = this.querySelector("textarea");
    const feedbackFormEmoji = this.querySelector("select");

    feedbackForm?.addEventListener("submit", async(event) => {
      event.preventDefault();
      const feedback = new FormData(feedbackForm);
      console.log(feedback);
      const feedbackInput = feedback.get("feedback-input");
      const emojiFeeling = feedback.get("emoji-feeling");

      const collRef = collection(db, "feedback");
      try {
        await addDoc(collRef, {
          feedback: feedbackInput, 
          emoji: emojiFeeling,
          createdAt: serverTimestamp()
        });
        resetFormAndThankUser();
      } catch (error) {
        console.log(error);
      }

      function resetFormAndThankUser() {
        feedbackFormInput.value = "";
        feedbackFormEmoji.value= "";
        feedbackFormInput.placeholder = "Thank You for your feedback :)";
        setTimeout(() => {
          feedbackFormInput.placeholder = "Your feedback is anonymous ...";
        } , 3000);
      }

    });
  }
}
window.customElements.define('submit-feedback', SubmitFeedback);
