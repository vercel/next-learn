"use client";

import BackgroundBlur from "@/app/ui/background-blur";
import React, { useState } from "react";

// This component contains basic logic for a React Form.
// We'll be updating it in Chapter 8 - Adding Authentication.

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="mt-40 flex h-screen flex-col items-center space-y-6">
      <BackgroundBlur />
      <a href="/">
        <img className="h-6 w-auto" src="/logo.svg" alt="Next.js Logo" />
      </a>
      <p className="text-center font-semibold text-gray-900">
        Log in to your dashboard
      </p>
      <div className="w-full max-w-sm">
        <form onSubmit={handleSubmit} className="px-4">
          <div>
            <label
              className="block text-sm font-medium leading-8 text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label
              className="block text-sm font-medium leading-8 text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full rounded-md bg-black px-4 py-2 text-center text-sm font-semibold text-white hover:bg-gray-700"
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
