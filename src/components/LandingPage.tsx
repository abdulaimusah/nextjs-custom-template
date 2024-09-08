import React from 'react';
import { Typography, Button } from 'antd';
import { useRownd } from '@rownd/react';

const { Title, Paragraph } = Typography;

const LandingPage: React.FC = () => {
  const { requestSignIn } = useRownd();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Title>Welcome to Our Application</Title>
      <Paragraph className="text-center max-w-2xl mt-4 text-lg text-gray-600">
        This is a powerful and flexible application built with Next.js, 
        Express, and MongoDB. It's designed to provide a seamless user 
        experience and robust backend functionality.
      </Paragraph>
      <Button 
        type="primary" 
        size="large" 
        onClick={() => requestSignIn()} 
        className="mt-8"
      >
        Sign In / Sign Up
      </Button>
    </div>
  );
};

export default LandingPage;