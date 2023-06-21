"use client";

import { useForm } from "@formspree/react";
import { HiOutlineEnvelope, HiOutlinePaperAirplane } from "react-icons/hi2";

export function ContactForm() {
  const [state, handleSubmit] = useForm("moqzgblr");
  if (state.succeeded) {
    return <p>Your message has been sent. Thank you!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-50 border border-gray-300 text-black/90 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="John Doe"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email-address-icon"
          className="block mb-2 text-sm font-medium"
        >
          Your Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <HiOutlineEnvelope className="w-4 h-4 text-black/40" />
          </div>
          <input
            type="email"
            id="email-address-icon"
            name="email"
            className="bg-gray-50 border border-slate-300 text-black/90 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-black/90 bg-gray-50 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Leave a message..."
          required
        ></textarea>
      </div>

      <div>
        <button
          className="px-4 py-1 border border-slate-300 rounded-lg hover:text-black/90 hover:shadow transition duration-150 flex items-center gap-x-1"
          type="submit"
        >
          <span>Send message</span>
          <HiOutlinePaperAirplane className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
