// استيراد Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// بيانات مشروع Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAlA7wJRvWMHrmad2b258oD275MDwmdN1M",
  authDomain: "vkraft369.firebaseapp.com",
  projectId: "vkraft369",
  storageBucket: "vkraft369.appspot.com", // ✅ تم تعديل الخطأ هنا
  messagingSenderId: "512869473984",
  appId: "1:512869473984:web:5f9874540efd6f8392d725",
  measurementId: "G-2KDF7N79FV"
};

// ✅ تهيئة Firebase
const app = initializeApp(firebaseConfig);

// ✅ خدمات Firebase
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ التحليلات (يفضل تستخدمها فقط في الإنتاج)
const analytics = getAnalytics(app);

// ✅ تصدير للاستخدام في باقي المشروع
export { app, auth, db, analytics };
