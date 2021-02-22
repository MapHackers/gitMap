import React from 'react';
import { Menu } from 'antd';

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="home">
      <a href="/createMyMap" style={{padding: '10px 15px'}}>Create-My-Map</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu