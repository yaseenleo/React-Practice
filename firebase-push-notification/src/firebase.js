// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxbcsYBpN-hv98SvWw1lOkKzDEOQYaExQ",
  authDomain: "push-notification-3161e.firebaseapp.com",
  projectId: "push-notification-3161e",
  storageBucket: "push-notification-3161e.appspot.com",
  messagingSenderId: "565886856247",
  appId: "1:565886856247:web:a61834e7ef16b6ee57e3b2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

messaging.onMessage((payload) => {
  console.log("Message received:", payload);
  // Handle the incoming message here
});
