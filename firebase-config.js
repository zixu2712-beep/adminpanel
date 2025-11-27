// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLNGdNXyz5NLgbQrVvE10wcXKN11XLxbk",
  authDomain: "abrar-hack-157e4.firebaseapp.com",
  databaseURL: "https://abrar-hack-157e4-default-rtdb.firebaseio.com",
  projectId: "abrar-hack-157e4",
  storageBucket: "abrar-hack-157e4.firebasestorage.app",
  messagingSenderId: "959552567510",
  appId: "1:959552567510:web:eca26d4e406da6d272f177",
  measurementId: "G-0BR1K6M0VL"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };