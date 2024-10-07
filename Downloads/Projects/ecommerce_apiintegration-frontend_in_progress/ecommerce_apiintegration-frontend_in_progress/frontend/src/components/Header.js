import React from 'react';
import { Layout } from 'antd';

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
        E-Commerce App
      </div>
      <div style={{ flexGrow: 1 }} />
    </AntHeader>
  );
};

export default Header;
