import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 
const firebaseConfig = {  
    apiKey: "AIzaSyD47aS36vkxn8s5E5O8XUq0zc_tXcOMvvA",
    authDomain: "sse3008week6-42621.firebaseapp.com",
    projectId: "sse3008week6-42621",
    storageBucket: "sse3008week6-42621.firebasestorage.app",
    messagingSenderId: "809826514271",
    appId: "1:809826514271:web:fca8a5e7dcd967013b32ea" 
}; 
    
    const app = initializeApp(firebaseConfig); 
    export const auth = getAuth(app); 
    export const db = getFirestore(app);