import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export async function signupUser(email, password, username) {
  const user = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", user.user.uid), {
    username,
    coins: 0,
    lastClaim: 0
  });
}

export async function loginUser(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}
