
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

  apiKey: "xxxx",

  authDomain: "xxxx",

  projectId: "xxxx",

  storageBucket: "xxxx",

  messagingSenderId: "xxxx",

  appId: "xxxx",

  measurementId: "xxxx"

};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
