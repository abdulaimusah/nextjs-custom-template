'use client'

import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { MenuFoldOutlined, MenuUnfoldOutlined, HomeOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useRownd } from '@rownd/react';

const { Header, Sider, Content } = Layout;

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const { is_authenticated: isAuthenticated, signOut, requestSignIn } = useRownd();

    const menuItems = [
        { key: '/', icon: <HomeOutlined />, label: 'Home' },
        { key: '/game', icon: <PlayCircleOutlined />, label: 'Play Game' },
    ];

    const handleMenuClick = (key: string) => {
        router.push(key);
    };

    const handleSignOut = () => {
        signOut();
        router.push("/");
    };

    return (
        <Layout className='h-screen flex flex-col' >
            <Header className='flex-shrink-0 sticky top-0 z-50' >
                <div className='h-full' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{ fontSize: '16px', width: 64, height: 64 }}
                    /> */}
                    <h1 className="text-lg font-bold">Fun Game</h1>
                    {isAuthenticated ? (
                        <Button onClick={handleSignOut}>Sign Out</Button>
                    ) : (
                        <Button type="primary" onClick={() => requestSignIn()}>Sign In</Button>
                    )}
                </div>
            </Header>
            {/* <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
                        {menuItems.map(item => (
                            <Menu.Item key={item.key} icon={item.icon} onClick={() => handleMenuClick(item.key)}>
                                {item.label}
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider> */}
            <Content className='flex-grow h-[calc(100vh-64px)] max-h-[calc(100vh-64px)]'>
                {children}
            </Content>
            {/* </Layout> */}
        </Layout>
    );
};

export default AppLayout;