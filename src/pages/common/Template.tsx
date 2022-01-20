import React from 'react';
import { Fade } from '@mui/material';
import common from '../../styles/Common.module.css';
import SideMenu from './SideMenu';
import Footer from './Footer';
import Header from './Header';

const Template: React.FC<{ menuOn: boolean; title?: string }> = ({ children, menuOn, title = 'Akatsuki' }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Header title={title} />
      <main>
        {menuOn && <SideMenu />}
        <Fade in timeout={{ enter: 1000, exit: 1000 }}>
          <div className={common.content}>
            <h1>{title}</h1>
            {children}
            <Footer />
          </div>
        </Fade>
      </main>
    </div>
  );
};

export default Template;
