import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './drawer.css';
import { Layout, Menu, message, Alert } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  LoadingOutlined,
  GroupOutlined ,
  InsertRowBelowOutlined,
  PhoneOutlined,
  UserDeleteOutlined
} from '@ant-design/icons';

import { NavLink } from "react-router-dom";
import { usePageValue } from "../../context";

import {Loading} from '../../units';
import { getRole } from '../../helpers/localStorageHelper';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default function SiderDemo (props) {
 
  const [collapse, setcollapse] = useState(false);
  const roleId = getRole();
  let {
    isPageLoading,
    isPageError,
    isPageSuccess,
    messageContent,
    setMessage,
    setPageSuccess,
    setPageError
  } = usePageValue();

  const toggle = () => {
    setcollapse(!collapse)
  };

  setPageSuccess(false);
  setPageError(false);
  const menuItems = {
    0: ( <Menu theme="dark" mode="inline" defaultSelectedKeys={props.selectedKey}>
    <Menu.Item key="01" icon={<GroupOutlined />}>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </Menu.Item>
    <Menu.Item key="02" icon={<PhoneOutlined />}>
      <NavLink to="/airtime">Airtime</NavLink>
    </Menu.Item>
    <Menu.Item key="03" icon={<UnorderedListOutlined  />}>
      <NavLink to="/data">Data</NavLink>
    </Menu.Item>
    <SubMenu key="sub2" icon={ <InsertRowBelowOutlined />} title="Transactions">
      <Menu.Item key="20"> <NavLink to="/transactions/airtime">Airtime Transactions</NavLink></Menu.Item>
      <Menu.Item key="21"> <NavLink to="/transactions/data">Data Transactions</NavLink></Menu.Item>
    </SubMenu>
    
    <SubMenu key="sub3" icon={<UserDeleteOutlined />} title="Issues">
     <Menu.Item key="4"><NavLink to="/complaint/create"> Lodge Complain</NavLink></Menu.Item>
     <Menu.Item key="5"> <NavLink to="/complains"> View Complain</NavLink> </Menu.Item>
      </SubMenu>
  </Menu>
),
1: (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={props.selectedKey}>
  <Menu.Item key="01" icon={<UserOutlined />}>
    <NavLink to="/dashboard">Dashboard</NavLink>
  </Menu.Item>
  <Menu.Item key="02" icon={<UserOutlined />}>
    <NavLink to="/users">Users</NavLink>
  </Menu.Item>
  <Menu.Item key="021" icon={<UserOutlined />}>
    <NavLink to="/vendors">Vendors</NavLink>
  </Menu.Item>

  <Menu.Item key="03" icon={<UnorderedListOutlined  />}>
    <NavLink to="/contacts/">Transactions</NavLink>
  </Menu.Item>

  <SubMenu key="sub2" icon={<GroupOutlined />} title="Transactions">
    <Menu.Item key="20"> <NavLink to="/transactions/airtime">Airtime Transactions</NavLink></Menu.Item>
    <Menu.Item key="21"> <NavLink to="/transactions/data">Data Transactions</NavLink></Menu.Item>
  </SubMenu>
  
  <SubMenu key="sub3" icon={<SettingOutlined />} title="Data Bundles">
   <Menu.Item key="4"><NavLink to="/networks/MTN"> MTN</NavLink></Menu.Item>
   <Menu.Item key="5"> <NavLink to="/networks/Airtel"> Airtel</NavLink> </Menu.Item>
   <Menu.Item key="6"><NavLink to="/networks/Glo">Glo </NavLink> </Menu.Item>
    <Menu.Item key="7"><NavLink to="/networks/9Mobile">9Mobile</NavLink></Menu.Item> 
  </SubMenu>



</Menu>

)
  }

    return (
      <Layout style={{height: "inherit"}}>
        {isPageLoading && <Loading /> }
        {isPageSuccess && message.success({ content: messageContent, key: 'success', duration: 2 })}

        <Sider trigger={null} collapsible collapsed={collapse}>
          <div className="logo" />

          {menuItems[roleId]}
          </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className=""
            style={{
              margin: '24px 16px',
              padding: 24,
            //   height: "100%",
            }}
          >
           {props.children}
          </Content>

          
        </Layout>
      </Layout>
    );
  }


// ReactDOM.render(<SiderDemo />, document.getElementById('container'));