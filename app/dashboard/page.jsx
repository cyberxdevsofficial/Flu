"use client";
import { useEffect, useState } from "react";
import { getUserCoins, claimDailyBonus, getReferralLink } from "../../lib/coins";
import { auth } from "../../lib/firebase";

export default function Dashboard() {
  const [coins, setCoins] = useState(0);
  const [referral, setReferral] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCoins(await getUserCoins());
        setReferral(await getReferralLink());
      }
    });
  }, []);

  return (
    <div className="min-h-screen px-6 pt-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="mt-6 bg-[#0d0d0d] border border-[#1f1f1f] p-6 rounded-xl">
        <h2 className="text-xl">Your Coins</h2>
        <p className="text-4xl font-bold mt-2">{coins} 🪙</p>

        <button
          onClick={async () => setCoins(await claimDailyBonus())}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg"
        >
          Claim Daily Bonus +20
        </button>

        <div className="mt-6">
          <h3 className="text-lg">Referral Link</h3>
          <p className="text-gray-400 mt-2 break-all">{referral}</p>
        </div>
      </div>
    </div>
  );
}
