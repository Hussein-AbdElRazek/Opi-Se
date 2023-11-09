
import { useSelector } from 'react-redux'

import './App.css';
import IndexRoutes from './routes/IndexRoutes';
import { AppBar } from './components/appBar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getWebsiteTitle } from './helpers/getWebsiteTitle';

function App()
{
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const location = useLocation();
  const [title, setTitle] = useState("");
  useEffect(() =>
  {
    console.log("useEffect1")
    const tempTitle = getWebsiteTitle(location.pathname);
    if (!!tempTitle) document.title = `Opi Se - ${tempTitle}`;
    setTitle(tempTitle);
  }, [location]);
  return (
    <div>
      {isLoggedIn && (<AppBar title={title} />)}
      <IndexRoutes />
    </div>
  );
}

export default App;
