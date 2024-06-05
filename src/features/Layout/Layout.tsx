import React, { ReactNode } from 'react';
import Header from './Header/Header';
import './Layout.scss';

interface ILayoutProps {
  children: ReactNode,
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className='layout'>
      <div className='layout__header'>
        <Header />
      </div>

      <div className='container'>
        <div className='layout__main'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
