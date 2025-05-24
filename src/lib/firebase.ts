import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import type { InsertApplication } from "@shared/schema";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0dzAkhl_T3dJP_yPYLoE9fsGzVDJnmEY",
  authDomain: "applications-2025-26.web.app",
  projectId: "applications-2025-26",
  storageBucket: "applications-2025-26.appspot.com",
  messagingSenderId: "345026163404",
  appId: "1:345026163404:web:40e9f4bce3e5c296358869",
  measurementId: "G-Y32C8EEH6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Save application data to Firestore
export const saveApplication = async (data: InsertApplication & { formSubmitted?: boolean }) => {
  try {
    const docRef = await addDoc(collection(db, "applications"), {
      ...data,
      formSubmitted: data.formSubmitted ?? false,
      createdAt: serverTimestamp()
    });
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error };
  }
};

export { db };
