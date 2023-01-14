
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDx2h3vRQk5IGrFsFI-h-tnhjpvzAHb5SU",
    authDomain: "aliloproyect.firebaseapp.com",
    projectId: "aliloproyect",
    storageBucket: "aliloproyect.appspot.com",
    messagingSenderId: "594626539511",
    appId: "1:594626539511:web:b7631f3b30664c3e0ac8f2",
    measurementId: "G-XSK8T06GYX",
};


const app = initializeApp(firebaseConfig);

export const initFirestore = () => app