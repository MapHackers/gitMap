/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../../Config'
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import { UserOutlined, BellOutlined } from '@ant-design/icons';

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  const onClick = () => {
    props.history.push("/userPage")
  }

  return (
    <Menu mode={props.mode}>
      <Menu.Item key="alarm">
        <a href="/main">
          <BellOutlined style={{ fontSize: '22px', marginLeft: '10px' }} />
        </a>
      </Menu.Item>
      <Menu.Item key="profile">
        <a href="/main">
          <UserOutlined style={{ fontSize: '22px', marginLeft: '10px' }} />
        </a>
      </Menu.Item>
    </Menu>
  )
}

export default withRouter(RightMenu);