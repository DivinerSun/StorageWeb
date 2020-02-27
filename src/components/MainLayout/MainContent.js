import React from 'react';
import { Layout } from 'antd';


const { Content } = Layout;


const MainContent = (props) => {

    return (
        <Content style={{ margin: '0 20px', padding: 24, background: '#fff', minHeight: '100%' }}>
            { props.children }
        </Content>
    );
}


export default MainContent;