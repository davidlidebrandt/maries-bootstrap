import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDTiLkekA8Q65_krnZG280y60kRhuj5n-U",
    authDomain: "maries-bootstrap.firebaseapp.com",
    projectId: "maries-bootstrap",
    storageBucket: "maries-bootstrap.appspot.com",
    messagingSenderId: "1083228106927",
    appId: "1:1083228106927:web:262625f554102cbfcda45a",
    measurementId: "G-F71JZW76QJ"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);