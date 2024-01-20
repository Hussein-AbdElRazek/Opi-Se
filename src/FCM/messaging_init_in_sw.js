import { initializeApp  } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyBwnBhQMrLca0IyhS0AEyswu8ytk5jIzfw",
  authDomain: "opi-se-bb89d.firebaseapp.com",
  projectId: "opi-se-bb89d",
  storageBucket: "opi-se-bb89d.appspot.com",
  messagingSenderId: "261362113066",
  appId: "1:261362113066:web:987650d1aaf6ff5a3d4153",
  measurementId: "G-8KZT8GZCZ2"
};


function requestPermission()
{
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) =>
  {
    if (permission === "granted")
    {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BFxTk_0RYohWTgd5bcUv8qYMKdsZEs_UWYj8xQeg4F1ozLijl4sA8sK3f2NBotlktQg-F-JHb5Qz_WfTaMk4FHU",
      }).then((currentToken) =>
      {
        if (currentToken)
        {
          console.log("currentToken: ", currentToken);
        } else
        {
          console.log("Can not get token");
        }
      });
    } else
    {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();