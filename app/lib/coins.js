import { auth } from "./firebase";
import { db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function getUserCoins() {
  const user = auth.currentUser;
  const snap = await getDoc(doc(db, "users", user.uid));
  return snap.data().coins;
}

export async function claimDailyBonus() {
  const user = auth.currentUser;
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;

  if (now - snap.data().lastClaim < day) {
    return snap.data().coins; // already claimed
  }

  await updateDoc(ref, {
    coins: snap.data().coins + 20,
    lastClaim: now,
  });

  return snap.data().coins + 20;
}

export async function getReferralLink() {
  const user = auth.currentUser;
  return `https://apihub-darktech.zone.id/refferal?=${user.email}`;
}
