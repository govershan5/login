import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD7ZITvWHrb4arZs6C6icW6g0-IlXiJRvE",
  authDomain: "results-ca821.firebaseapp.com",
  projectId: "results-ca821",
  storageBucket: "results-ca821.appspot.com",
  messagingSenderId: "1002829042503",
  appId: "1:1002829042503:web:4c2df178cca9b8ac3cf262",
  measurementId: "G-Y6ZDMEB55D"
};

  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);