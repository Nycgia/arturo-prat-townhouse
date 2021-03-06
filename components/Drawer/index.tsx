import React from 'react';
import { Drawer, DrawerProps } from 'rsuite';
import CloseIcon from '@rsuite/icons/Close';

interface IDrawerProps extends DrawerProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

const buttonStyle = {
  width: 35,
  height: 35,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  color: '#fff',
  border: 0,
  outline: 0,
  boxShadow: 'none',
  borderRadius: '50%',
  position: 'fixed' as 'fixed',
  top: '10px',
  right: '10px',
  zIndex: 100000,
  cursor: 'pointer',

  ':focus': {
    outline: 0,
    boxShadow: 'none',
  },
};

const AdminDrawer: React.FC<IDrawerProps> = ({ isOpen, onRequestClose, children, ...drawerProps }) => (
  <Drawer open={isOpen} onClose={onRequestClose} size='full' {...drawerProps}>
    <button type='button' onClick={onRequestClose} style={{ ...buttonStyle }}>
      <CloseIcon
        style={{
          fontSize: '20px',
        }}
      />
    </button>
    <div className='p-5 w-100'>{children}</div>
  </Drawer>
);

export default AdminDrawer;
