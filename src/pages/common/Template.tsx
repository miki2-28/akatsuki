import React from 'react';
import common from '../../styles/Common.module.css';
import SideMenu from './SideMenu';
import Footer from './Footer';

const Template: React.FC = ({ children }) => {
  return (
    <div>
      <SideMenu />
      <div className={common.content}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Template;
