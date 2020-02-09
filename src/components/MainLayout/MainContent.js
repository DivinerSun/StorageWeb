import React from 'react';
import { Layout, Breadcrumb } from 'antd';


const { Content } = Layout;


const MainContent = () => {

    return (
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>
                我是内容区域
            </div>
        </Content>
    );
}


export default MainContent;