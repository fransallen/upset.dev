"use client";

import { useForm } from "@formspree/react";
import { HiOutlineEnvelope, HiOutlinePaperAirplane } from "react-icons/hi2";

export function ContactForm() {
  const [state, handleSubmit] = useForm("moqzgblr");

  if (state.succeeded) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
        <h3 className="text-lg font-medium text-green-800">Message Sent!</h3>
        <p className="mt-2 text-green-700">
          Thank you for your message. I'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground"
        >
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          placeholder="John Doe"
          required
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground"
        >
          Your Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <HiOutlineEnvelope className="w-4 h-4 text-muted-foreground" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-md border border-input bg-background pl-10 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground"
        >
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          placeholder="Leave a message..."
          required
        ></textarea>
      </div>

      <div>
        <button
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send message"}
          <HiOutlinePaperAirplane className="ml-2 h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
