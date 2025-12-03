import { useEffect, useState } from "react";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";

function SuggestionForm(params) {
  const [suggestion, setSuggestion] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("mrbkaabj");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Submitted Successfully, ZekiBot salutes you!");
      params.onSuccess(); // close the modal automatically after showing toast
      setSuggestion({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [state.succeeded, params.onSuccess]);

  if (state.succeeded) return null;

  return (
    <div className="flex justify-center items-center">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-primary py-6 w-1/2 rounded-xl flex justify-center items-center text-blue-50 border-7 border-blue-50 border-double"
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full ">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={suggestion.name}
              onChange={(e) =>
                setSuggestion({ ...suggestion, name: e.target.value })
              }
              name="name"
              id="name"
              placeholder="Your Good Name"
              className="border border-blue-50 bg-background text-blue-50 rounded w-120 py-2 px-3 mb-3 leading-tight focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-full ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={suggestion.email}
              onChange={(e) =>
                setSuggestion({ ...suggestion, email: e.target.value })
              }
              name="email"
              id="email"
              placeholder="abc123@example.com"
              className="border border-blue-50 bg-background text-blue-50 rounded w-120 py-2 px-3 mb-3 leading-tight focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-full ">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              value={suggestion.message}
              onChange={(e) =>
                setSuggestion({ ...suggestion, message: e.target.value })
              }
              name="message"
              id="message"
              placeholder="Your Message, Suggestion, Complain, etc"
              className="border border-blue-50 bg-background text-blue-50 rounded w-120 py-2 px-3 mb-3 leading-tight focus:outline-none h-40"
            />
          </div>

          <div className="w-full gap-4 flex justify-end">
            <button
              className="px-4 py-1.5 bg-emerald-600 rounded-lg"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SuggestionForm;
