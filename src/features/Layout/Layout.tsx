import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import Header from './Header/Header';
import './Layout.scss';

const HEADERLESS_ROUTES = [
  '/account/login',
  '/account/register',
];

interface ILayoutProps {
  children: ReactNode,
}

function Layout({ children }: ILayoutProps) {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    console.log(location.pathname)
    setShowHeader(!HEADERLESS_ROUTES.includes(location.pathname));
  }, [location])

  return (
    <div className='app-layout'>
      {
        showHeader ? <div className='app-layout__header'>
          <Header />
        </div> : null
      }

      <div className='app-layout__container container'>
        <div className='app-layout__main'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
