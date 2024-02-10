
import { useSelector } from 'react-redux'

import './App.css';
import IndexRoutes from './routes/IndexRoutes';
import { AppBar } from './components/appBar';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getWebsiteTitle } from './helpers/getWebsiteTitle';
import { PageLayout } from './components/common';
import IncomingVideoCall from './pages/User/IncomingVideoSession/IncomingVideoCall';
import VideoContext from './videoCallStore/video-call-context';
import useGeneralSocket from './hooks/use-general-sockets';
import SessionConfirmation from './pages/User/SessionConfirmation/SessionConfirmation';
// import {messaging} from './FCM/firebase'
// import { getToken,onMessage } from 'firebase/messaging'
// import './FCM/messaging_init_in_sw';

function App()
{
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const firstTime = useSelector((state) => state.auth.userData?.getUserPrefers);
  // const firstTime = useSelector((state) => state.auth.userData.firstTime)
  const location = useLocation();
  const [title, setTitle] = useState("");

  //handle background color for user 
  //and guest i had handle it in index.css file 
  if (isLoggedIn) document.body.style.backgroundColor = "var(--background2)";
  // useEffect(() =>
  // {
  //   const tempTitle = getWebsiteTitle(location.pathname);
  //   if (!!tempTitle) document.title = `Opi Se - ${tempTitle}`;
  //   setTitle(tempTitle);
  // }, [location]);
  // useEffect(()=>{
  //   const messagingFireBase = messaging();
  //   messagingFireBase.requestPermission().then(()=>{
  //     return messagingFireBase.getToken();
  //   }).then(token=>{
  //     console.log('TOKEN: ',token);
  //   }).catch(()=>{
  //     console.log("error")
  //   })
  // },[])

  // async function requestPermission()
  // {
  //   const permission = await Notification.requestPermission();
  //   if (permission === "granted")
  //   {
  //     // Generate Token
  //     const token = await getToken(messaging, {
  //       vapidKey:
  //         "BFxTk_0RYohWTgd5bcUv8qYMKdsZEs_UWYj8xQeg4F1ozLijl4sA8sK3f2NBotlktQg-F-JHb5Qz_WfTaMk4FHU",
  //     });
  //     console.log("Token Gen", token);
  //     // Send this token  to server ( db)
  //   } else if (permission === "denied")
  //   {
  //     alert("You denied for the notification");
  //   }
  // }

  // useEffect(() =>
  // {
  //   // Req user for notification permission
  //   requestPermission();
  // }, []);
  // useEffect(()=>{
  //   onMessage((payload)=>{
  //     console.log("on Message", payload);
  //   })
  // },[])
  const { call } = useContext(VideoContext);

  // General sockets
  // handle join rooms + necessary listener in app root
  useGeneralSocket();
  
  return (
    <div>
      {isLoggedIn && !firstTime ? (
        <>
          <AppBar title={title} />
          {/* for incoming calls */}
          {(call && call.isReceivingCall) && <IncomingVideoCall />}

          {/* for incoming session */}
          <SessionConfirmation />
          <PageLayout>
            <IndexRoutes />
          </PageLayout>
        </>
      ) :
        <IndexRoutes />
      }
    </div>
  );
}

export default App;
