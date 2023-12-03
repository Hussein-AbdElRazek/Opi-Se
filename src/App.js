
import { useSelector } from 'react-redux'

import './App.css';
import IndexRoutes from './routes/IndexRoutes';
import { AppBar } from './components/appBar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getWebsiteTitle } from './helpers/getWebsiteTitle';
import { PageLayout } from './components/common';

function App()
{
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn) 
  // const firstTime = useSelector((state) => state.auth.userData.firstTime)
  const location = useLocation();
  const [title, setTitle] = useState("");

  //handle background color for user 
  //and guest i had handle it in index.css file 
  if (isLoggedIn) document.body.style.backgroundColor = "var(--background2)";
  useEffect(() =>
  {
    const tempTitle = getWebsiteTitle(location.pathname);
    if (!!tempTitle) document.title = `Opi Se - ${tempTitle}`;
    setTitle(tempTitle);
  }, [location]);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <AppBar title={title} />
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
