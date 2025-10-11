import ReactButton from "@components/buttons/ReactButton";
import { useState } from "preact/hooks";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@firebase/client";

export default function FeedbackForm() {

  const [ message, setMessage ] = useState<string | undefined>();
  const [ input, setInput ] = useState<string | undefined>();
  const [ emoji, setEmoji ] = useState<string | undefined>();

  const onSubmit = async function(e: SubmitEvent) {
    e.preventDefault();

    const collRef = collection(db, "feedback");

    try {
      await addDoc(collRef, {
        uid: auth.currentUser?.uid,
        feedback: input,
        emoji: emoji || "",
        createdAt: serverTimestamp(),
      });

      setInput("");
      setEmoji("");
      setMessage(undefined);
    } catch(error) {
      console.log(error);
      setMessage("You have to be signed in to provide feedback.");
    }
  };

  return (
    <form id="egg-form-feedback" onSubmit={onSubmit}>
      <label for="egg-form-feedback-input">
        <h2>FEEDBACK</h2>
        { message && <div className="text-red-500">{message}</div> }
      </label>

      <div 
        class={`mt-3 border-2 rounded-lg p-2
          has-[:focus]:border-[var(--sl-color-accent)] has-[:focus]:dark:border-[var(--sl-color-accent-high)]
        `}
      >
        {/* Input */}
        <textarea
          name="feedback-input"
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          id="egg-form-feedback-input"
          placeholder="Your feedback is anonymous ..."
          aria-placeholder="Share your feedback with us."
          class={`w-full h-24 resize-none rounded-sm py-1 px-2
            bg-[var(--sl-color-black)] dark:bg-[var(--sl-color-gray-7)]
            focus:outline-none
          `}
        />

        {/* Select and Submit Button */}
        <div class="flex justify-between items-end">
          <div class="grid">
            <label 
              for="egg-emoji-feeling-select" 
              class={`text-xs font-bold mb-1 text-[var(--sl-color-gray-3)]`}
            >RATE THE SITE</label>
            <select 
              name="emoji-feeling"
              id="egg-emoji-feeling-select"
              class={`bg-[var(--sl-color-gray-6)] py-2 px-3 rounded
                focus:ring focus:outline-none focus:ring-[var(--sl-color-accent)] focus:ring-offset-2 dark:focus:ring-offset-[var(--sl-color-gray-5)]
              `}
              defaultValue={emoji}
              onChange={(e) => setEmoji(e.currentTarget.value)}
            >
              <option value="">⭐</option>
              <option value="very-good">🔥 Very Good</option>
              <option value="good">😃 Good</option>
              <option value="fair">😐 Fair</option>
              <option value="bad">☹️ Bad</option>
              <option value="very-bad">😡 Very Bad</option>
            </select>
          </div>
          <ReactButton 
            type="submit"
            className="px-4"
          >
            Send
          </ReactButton>
        </div>
      </div>
    </form>
  );
}

