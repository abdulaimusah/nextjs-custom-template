import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const ProfilePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Title level={2}>Welcome! You are logged in.</Title>
            <p className="mt-4 text-lg text-gray-600">
                This is your personal profile page. Feel free to customize it as needed.
            </p>
        </div>
    );
};

export default ProfilePage;