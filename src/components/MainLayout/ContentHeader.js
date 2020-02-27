import React from 'react';
import { Layout, Breadcrumb, Affix } from 'antd';


const { Header } = Layout;


const ContentHeader = () => {

    return (
        <Affix offsetTop={0}>
            <Header style={{ background: '#fff', margin: 0, padding: 0, height: '100px' }}>
                <div style={{height: '64px'}}>
                    我是头部
                </div>
                <div style={{height: '36px', background: '#f1f2f5', paddingLeft: '20px'}}>
                    <Breadcrumb style={{lineHeight: '36px'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </Header>
        </Affix>
    );
}


export default ContentHeader;