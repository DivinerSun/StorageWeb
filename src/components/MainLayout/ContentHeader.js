import React from 'react';
import { Layout } from 'antd';


const { Header } = Layout;


const ContentHeader = () => {

    return (
        <Header style={{ background: '#fff', margin: 0, padding: 0 }}>
            我是头部
        </Header>
    );
}


export default ContentHeader;