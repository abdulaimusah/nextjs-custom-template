'use client'

import React, { useEffect } from 'react';
import { useRownd } from '@rownd/react';
import { ConfigProvider } from 'antd';
import themeConfig from '@/theme/themeConfig';
import { setGetTokenFunction } from '@/utils/authUtils';

const RowndAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { getAccessToken } = useRownd();

    useEffect(() => {
        setGetTokenFunction(getAccessToken as any);
    }, [getAccessToken]);

    return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};

export default RowndAuthProvider;