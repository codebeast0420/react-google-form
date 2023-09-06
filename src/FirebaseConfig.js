import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCucX1dEueeVFkKsYdyeMrX-ZsjYun7foA",
    authDomain: "form-clone-f7d9d.firebaseapp.com",
    projectId: "form-clone-f7d9d",
    storageBucket: "form-clone-f7d9d.appspot.com",
    messagingSenderId: "462564334806",
    appId: "1:462564334806:web:4339120849a32838e47d77",
    measurementId: "G-2YWW5Q895Q"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
