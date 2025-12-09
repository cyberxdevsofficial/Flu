"use client";
import { useState } from "react";
import Link from "next/link";
import { loginUser } from "../../lib/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    await loginUser(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <input
          className="w-full px-4 py-3 bg-[#111] border border-[#222] rounded-lg mb-4"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full px-4 py-3 bg-[#111] border border-[#222] rounded-lg mb-4"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg"
        >
          Login
        </button>

        <p className="text-center mt-4 text-gray-500">
          No account? <Link href="/signup" className="text-blue-500">Signup</Link>
        </p>
      </div>
    </div>
  );
}
