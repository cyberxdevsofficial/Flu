"use client";
import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-8 shadow-xl">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Create an Account
        </h1>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <input
            className="w-full px-4 py-3 bg-[#111] border border-[#222] rounded-lg outline-none focus:border-blue-500 transition"
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full px-4 py-3 bg-[#111] border border-[#222] rounded-lg outline-none focus:border-blue-500 transition"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Signup Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold text-lg">
            Sign Up
          </button>
        </div>

        {/* Divider */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="h-[1px] bg-[#222] w-20"></div>
          <span className="text-[#666] text-sm">or</span>
          <div className="h-[1px] bg-[#222] w-20"></div>
        </div>

        {/* Login Link */}
        <p className="text-center text-sm text-[#777] mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}
