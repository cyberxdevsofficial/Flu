"use client";
import { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";
import { db } from "../../lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function APIPage() {
  const [coins, setCoins] = useState(0);
  const [loading, setLoading] = useState(true);

  const apiList = [
    {
      name: "ShareText API",
      desc: "Create shareable text links instantly.",
      url: "https://sharetextapi-anugasenithu.vercel.app/api/tool/sharetext?q=hello%20user",
    },
  ];

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const snap = await getDoc(doc(db, "users", user.uid));
        setCoins(snap.data().coins);
        setLoading(false);
      }
    });
  }, []);

  const useAPI = async (apiURL) => {
    const user = auth.currentUser;
    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);

    if (snap.data().coins < 2) {
      alert("Not enough coins! You need minimum 2 coins.");
      return;
    }

    // Deduct coins
    await updateDoc(ref, {
      coins: snap.data().coins - 2,
    });

    setCoins(snap.data().coins - 2);

    // Redirect
    window.location.href = apiURL;
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen px-6 pt-10">
      <h1 className="text-3xl font-bold">Dark Tech Zone APIs</h1>

      <div className="mt-4 text-xl">
        <b>Your Coins:</b> {coins} 🪙
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {apiList.map((api, index) => (
          <div
            key={index}
            className="bg-[#0d0d0d] border border-[#1f1f1f] p-6 rounded-xl"
          >
            <h2 className="text-xl font-bold">{api.name}</h2>
            <p className="text-gray-400 mt-2">{api.desc}</p>

            <button
              onClick={() => useAPI(api.url)}
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg mt-4"
            >
              Use API (Cost: 2 Coins)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
