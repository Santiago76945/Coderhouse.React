// src/config.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZjn_6YAlrgTBhcGRqAJDh2cm1brWWqVo",
    authDomain: "react-coderhouse-828ad.firebaseapp.com",
    projectId: "react-coderhouse-828ad",
    storageBucket: "react-coderhouse-828ad.appspot.com",
    messagingSenderId: "1034751938941",
    appId: "1:1034751938941:web:e7687bef4865253b0e3c14",
    measurementId: "G-P46YTWPQ5Y"  // Puedes dejarlo si decides usar Analytics en el futuro
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

