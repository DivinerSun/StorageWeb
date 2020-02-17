import React from 'react';
import { Layout, Breadcrumb } from 'antd';


const { Content } = Layout;


const MainContent = (props) => {

    return (
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>
                { props.children }
            </div>
        </Content>
    );
}


export default MainContent;