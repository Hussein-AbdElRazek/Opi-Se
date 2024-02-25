
import { useSelector } from 'react-redux'

import './App.css';
import IndexRoutes from './routes/IndexRoutes';
import { AppBar } from './components/appBar';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getWebsiteTitle } from './helpers/getWebsiteTitle';
import { PageLayout } from './components/common';
import IncomingVideoCall from './pages/User/IncomingVideoSession/IncomingVideoCall';
import VideoContext from './videoCallStore/video-call-context';
import useGeneralSocket from './hooks/use-general-sockets';
import SessionConfirmation from './pages/User/SessionConfirmation/SessionConfirmation';

function App()
{
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const firstTime = useSelector((state) => state.auth.userData?.getUserPrefers);
  const location = useLocation();

  //handle background color for user 
  //and guest i had handle it in index.css file 
  if (isLoggedIn) document.body.style.backgroundColor = "var(--background2)";

  // Update title based on page
  useEffect(() =>
  {
    const tempTitle = getWebsiteTitle(location.pathname);
    if (!!tempTitle) document.title = `Opi Se - ${tempTitle}`;
  }, [location]);

  const { call } = useContext(VideoContext);

  // General sockets
  // handle join rooms + necessary listener in app root
  useGeneralSocket();

  return (
    <div>
      {isLoggedIn && !firstTime ? (
        <>
          <AppBar />
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
