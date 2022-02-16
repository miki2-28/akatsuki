import React from 'react';
import { Fade } from '@mui/material';
import common from '../../styles/Common.module.css';
import SideMenu from './SideMenu';
import Footer from './Footer';
import Header from './Header';
import { useMediaQueryContext } from './MediaQueryProvider';

const Template: React.FC<{ menuOn: boolean; title?: string }> = ({ children, menuOn, title = 'Twilight Moon' }) => {
  const { isMobileSite } = useMediaQueryContext();
  return (
    <div style={isMobileSite ? { width: '100%', height: '100%' } : { width: '75%', height: '100%', margin: 'auto' }}>
      <Header title={title} />
      {menuOn && <SideMenu />}
      <Fade in timeout={{ enter: 1000, exit: 1000 }}>
        <div className={common.content}>
          <h1>{title}</h1>
          <div style={{ padding: 5 }}>{children}</div>
          <Footer />
        </div>
      </Fade>
    </div>
  );
};

export default Template;
