
import { useSelector } from 'react-redux'
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './App.css';
import IndexRoutes from './routes/IndexRoutes';
import { NavBar } from './components/appBar';
import { getWebsiteTitle } from './helpers/getWebsiteTitle';
import { GuestFooter, GuestNav, PageLayout } from './components/common';
import IncomingVideoCall from './pages/User/IncomingVideoCall/IncomingVideoCall';
import CallContext from './callStore/call-context';
import useGeneralSocket from './hooks/use-general-sockets';
import SessionConfirmation from './pages/User/SessionConfirmation/SessionConfirmation';
import VoiceCall from './pages/User/VoiceCall/VoiceCall';
import moment from 'moment';
import { isMobileDevice } from './helpers/isMobileDevice';

function App()
{
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const firstTime = useSelector((state) => state.auth.userData?.getUserPrefers);
  const location = useLocation();

  //handle background color for user 
  //and guest i had handle it in index.css file 
  if (isLoggedIn && !firstTime) document.body.style.backgroundColor = "var(--background2)";

  // Update title based on page
  useEffect(() =>
  {
    const tempTitle = getWebsiteTitle(location.pathname);
    if (!!tempTitle) document.title = ` ${tempTitle} - Opi Se `;
  }, [location]);

  const { call, stream } = useContext(CallContext);

  // General sockets
  // handle join rooms + necessary listener in app root
  useGeneralSocket();

  // Update locale of moment (language of date)
  // because use LocalizationProvider in index.js
  //  for date and time picker make language
  //  change for date in another pages
  moment.updateLocale('en', {});

  // for handle overflow for mobile when call
  useEffect(() =>
  {
    if (call && isMobileDevice)
    {
      document.body.style.overflow = "hidden";
    } else
    {
      document.body.style.overflow = "auto";
    }
  }, [call])

  return (
    <div>
      {isLoggedIn && !firstTime ? (
        <>
          <NavBar />

          {/* for incoming calls */}
          {(call && call?.isReceivingCall && !(call?.busy) && call?.callType === "video") && <IncomingVideoCall />}
          {(call && call?.callType === "voice" && stream) && <VoiceCall />}

          {/* for incoming session */}
          <SessionConfirmation />

          <PageLayout>
            <IndexRoutes />
          </PageLayout>
        </>
      ) :
        <>
          
          {!location.pathname.includes("/login") && !location.pathname.includes("signup") ? (
            <>
              <GuestNav />

              <PageLayout
                type='guest'
              >
                <IndexRoutes />
              </PageLayout>

              <GuestFooter />
            </>
          ):(
              <IndexRoutes />
          )}
        </>
      }
    </div>
  );
}

export default App;
