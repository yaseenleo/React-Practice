importScripts("https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyBxbcsYBpN-hv98SvWw1lOkKzDEOQYaExQ",
  authDomain: "push-notification-3161e.firebaseapp.com",
  projectId: "push-notification-3161e",
  storageBucket: "push-notification-3161e.appspot.com",
  messagingSenderId: "565886856247",
  appId: "1:565886856247:web:a61834e7ef16b6ee57e3b2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
