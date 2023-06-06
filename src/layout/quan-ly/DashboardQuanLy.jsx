/** @format */

import React from 'react';
import { Layout, Space } from 'antd';
import Sidebar from '../../components/quan-ly/Slidebar';
import ComplexNavbar from '../../components/quan-ly/Header';

const { Header, Footer, Sider, Content } = Layout;

const DashBoardLayoutQuanLy = ({children}) => {
    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        paddingInline: 50,
        lineHeight: '64px',
        width: "100%",
        marginTop: -90,
        background: "rgba(255, 255, 255, 0)"
      };
      const contentStyle = {
        textAlign: 'center',
        lineHeight: '120px',
        color: '#000',
        paddingTop: 100,
        background: "#f8f9fa"
      };
      const siderStyle = {
        textAlign: 'center',
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#3ba0e9',
        background: "#f8f9fa"
      };
      const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#7dbcea',
      };
    return <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout style={{background: "#f8f9fa"}}>
      <Sider style={siderStyle}>
        <Sidebar style={siderStyle}></Sidebar>
      </Sider>
      <Layout style={{    marginLeft: "50px"}}>
        <Header style={headerStyle} className='pt-3 sticky top-0 z-50 opacity-100 backdrop-blur-0 backdrop-filter-none' >
          <ComplexNavbar/>
        </Header>
        <Content style={contentStyle}>
          {children}
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  </Space>
};

export default DashBoardLayoutQuanLy;
