importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyDYiYOXLU3YU-EMfMigwPCTPiXpKQYCZ9o",
    authDomain: "opi-se.firebaseapp.com",
    projectId: "opi-se",
    storageBucket: "opi-se.appspot.com",
    messagingSenderId: "1001961629897",
    appId: "1:1001961629897:web:bd53e19cf6b99f8a49c518",
    measurementId: "G-JYSP9XPFVG"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// when receive new notification
messaging.onBackgroundMessage(async (payload) =>
{
    const notificationOptions = {
        body: payload.data.message,
    };
    await self.registration.showNotification("", notificationOptions);
});

