import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYiYOXLU3YU-EMfMigwPCTPiXpKQYCZ9o",
  authDomain: "opi-se.firebaseapp.com",
  projectId: "opi-se",
  storageBucket: "opi-se.appspot.com",
  messagingSenderId: "1001961629897",
  appId: "1:1001961629897:web:bd53e19cf6b99f8a49c518",
  measurementId: "G-JYSP9XPFVG"
};

export const requestNotificationPermission = async () =>
{
  //console.log("Requesting permission...");
  let newToken = "default";
  try
  {
    await Notification.requestPermission().then(async (permission) =>
    {
      if (permission === "granted")
      {
        //console.log("Notification permission granted.");
        const app = initializeApp(firebaseConfig);

        const messaging = getMessaging(app);

        await getToken(messaging, {
          vapidKey:
            "BLyneYAAV_Xhi1K6_w5z7evKC18siaLFqDpcB5To35XqE2Wj6Zz3vs-xX_RH4zw7F39QCdrgjrOrp0H8Xk6pwTs",
        }).then((currentToken) =>
        {
          if (currentToken)
          {
            //console.log("currentToken: ", currentToken);
            newToken = currentToken;
          } else
          {
            //console.log("Can not get token");
          }
        });
      } else
      {
        //console.log("Do not have permission!");
      }
    });
  } catch (error)
  {
    //console.log(error)
  }
  return newToken;
}

requestNotificationPermission();