
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getDatabase, ref, push } from "firebase/database";  


const firebaseConfig = {
  apiKey: "AIzaSyBkRiAOvDFvwCH9C0J2yc5hn3evR5JZnxc",
  authDomain: "princessstd-a1fe4.firebaseapp.com",
  databaseURL: "https://princessstd-a1fe4-default-rtdb.firebaseio.com",  
  projectId: "princessstd-a1fe4",
  storageBucket: "princessstd-a1fe4.firebasestorage.app",
  messagingSenderId: "953581564939",
  appId: "1:953581564939:web:047d86425770095e55430e",
  measurementId: "G-Z967YG9V16"
};


const app = initializeApp(firebaseConfig);



const database = getDatabase(app);  


export { database, ref, push };
export const auth = getAuth(app);
