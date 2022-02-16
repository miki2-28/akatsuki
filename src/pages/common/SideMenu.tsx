import React, { useRef, useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ContactPage, InsertPhoto, MenuBook } from '@mui/icons-material';
import { ListItemIcon, ListItemText } from '@mui/material';
import common from '../../styles/Common.module.css';

const SideMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <div className={common.menu} ref={menuRef}>
      <MenuIcon fontSize="large" color="inherit" onClick={() => setOpen(!open)} cursor="pointer" />
      <Menu open={open} anchorEl={menuRef.current} onClose={() => setOpen(!open)} sx={{ opacity: 0.8 }}>
        <MenuList sx={{ width: 320, outline: 0 }}>
          <MenuItem color="secondary" aria-setsize={100}>
            <ListItemIcon>
              <MenuBook fontSize="large" />
            </ListItemIcon>
            <ListItemText>
              <Link href="">Novels</Link>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <InsertPhoto fontSize="large" />
            </ListItemIcon>
            <ListItemText>
              <Link href="">Illustrations</Link>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContactPage fontSize="large" />
            </ListItemIcon>
            <ListItemText>
              <Link href="">Contacts</Link>
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default SideMenu;
