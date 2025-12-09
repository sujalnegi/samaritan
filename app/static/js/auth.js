import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "xxxx",
  authDomain: "xxxx",
  projectId: "xxxx",
  storageBucket: "xxxx",
  messagingSenderId: "xxxx",
  appId: "xxxx"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();
    const resp = await fetch("/api/session/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + idToken
      },
      body: JSON.stringify({})
    });
    if (resp.ok) {
      window.location.href = "/dashboard";
      return;
    }
    let data;
    try {
      data = await resp.json();
    } catch {
      data = { error: await resp.text() };
    }
    alert(data.error || "Login failed");
  } catch (err) {
    alert(err.message || "Sign in failed");
  }
}

function init() {
  const btn = document.getElementById("googleSignInBtn");
  if (!btn) return;
  btn.addEventListener("click", signInWithGoogle);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
