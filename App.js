import React from 'react';

import { AuthProvider } from './src/contexts/auth';
import { LinkProvider } from './src/contexts/links';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {
  return (
    <AuthProvider>
      <LinkProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      </LinkProvider>
    </AuthProvider>
  );
}
