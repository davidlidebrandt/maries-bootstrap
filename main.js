import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBQvGgwuMTgiygpF_37uuV9A_Ls5g4dAdg",
    authDomain: "maries-fothalsa-5df36.firebaseapp.com",
    projectId: "maries-fothalsa-5df36",
    storageBucket: "maries-fothalsa-5df36.appspot.com",
    messagingSenderId: "502780488595",
    appId: "1:502780488595:web:af4c80cdd92a8de80e9666",
    measurementId: "G-Y8XGM2P1HC"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);