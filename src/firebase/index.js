import  {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyApvSFOW-92f6-BRZM2fToslwRFGYtFoOo",
    authDomain: "eltemplo-ecommerce.firebaseapp.com",
    projectId: "eltemplo-ecommerce",
    storageBucket: "eltemplo-ecommerce.appspot.com",
    messagingSenderId: "897763870303",
    appId: "1:897763870303:web:2cbfd99231dad5ea247dea"
  };

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export {getFirestore};