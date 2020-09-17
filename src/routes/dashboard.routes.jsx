import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../components/Drawer'
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

export default function DashboardRoutes() {
  return (
    <Drawer.Navigator initialRouteName="home" edgeWidth={300} drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="home" component={Home} />
    </Drawer.Navigator>
  );
}