import React from 'react';
import { NavLink } from 'react-router-dom'
import _ from 'lodash';
import { Layout, Menu, Icon, Affix } from 'antd';
import ContentHeader from './ContentHeader';
import MainContent from './MainContent';
import { menuItems } from './menuItems';
import Logo from '../../logo.svg';
import './index.less';

const { Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MainLayout extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    renderMenu = items => {
        return _.map(items, item => {
            if (!_.get(item, 'children')) {
                return (
                    <Menu.Item key={_.get(item, 'key')}>
                        {_.get(item, 'icon') ? <Icon type={_.get(item, 'icon')} /> : null}
                        <NavLink to={'/admin' + _.get(item, 'url')}>{_.get(item, 'title')}</NavLink>
                    </Menu.Item>
                );
            } else {
                return (
                    <SubMenu
                        key={_.get(item, 'key')}
                        title={
                            <span>
                                <Icon type={_.get(item, 'icon')} />
                                <span>{_.get(item, 'title')}</span>
                            </span>
                        }
                    >
                        { this.renderMenu(_.get(item, 'children')) }
                    </SubMenu>
                );
            }
        });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Affix offsetTop={0}>
                    <Sider style={{height: '100vh'}} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <a href={'/admin'} className={'logo'}>
                            <img src={Logo} alt={'图标'} />
                            <span className={'title'}>仓储管理系统</span>
                        </a>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            { this.renderMenu(menuItems) }
                        </Menu>
                    </Sider>
                </Affix>
                <Layout>
                    <ContentHeader />
                    <MainContent> { this.props.children } </MainContent>
                    <Footer style={{ textAlign: 'center' }}>Storage Platform Web ©2020 Created by Diviner</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout;