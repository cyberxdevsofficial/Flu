"use client";
import Link from "next/link";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return auth.onAuthStateChanged((u) => setUser(u));
  }, []);

  return (
    <nav className="w-full bg-[#0d0d0d] border-b border-[#1e1e1e] px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        🔥 DTZ API HUB
      </Link>

      <div className="flex gap-6">
        {!user && (
          <>
            <Link href="/login" className="hover:text-blue-500">Login</Link>
            <Link href="/signup" className="hover:text-blue-500">Signup</Link>
          </>
          <Link href="/api" className="hover:text-blue-500">APIs</Link>
          </>
        )}

        {user && (
          <>
            <Link href="/dashboard" className="hover:text-blue-500">Dashboard</Link>
            <button
              onClick={() => signOut(auth)}
              className="text-red-500 hover:text-red-400"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
