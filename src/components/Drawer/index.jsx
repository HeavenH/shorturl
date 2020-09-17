import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation  } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Avatar, Drawer, Title, Caption } from 'react-native-paper';

import { Container, DrawerContentSection, UserInfoSection } from './styles';

import { useAuth } from '../../contexts/auth';

const DrawerContent = (props) => {
  const navigation = useNavigation();

  const { singOut, user } = useAuth();

  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <DrawerContentSection>
          <UserInfoSection style={{ flexDirection: 'row', marginTop: 10, marginLeft: 12 }}>
            <View style={{ marginTop: 5 }}>
              <Avatar.Image
                source={{
                  uri: 'https://avatars0.githubusercontent.com/u/13907472'
                }}
                size={50}
              />
            </View>
            <View style={{ marginLeft: 15 }}>
              <Title>{user?.username}</Title>
              <Caption>@gilmazin</Caption>
            </View>
          </UserInfoSection>
          <Drawer.Section>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => { navigation.navigate('home') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="link-variant" color={color} size={size} />
              )}
              label="Your Links"
              onPress={() => { navigation.navigate('links') }}
            />
          </Drawer.Section>
        </DrawerContentSection>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.BottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={singOut}
        />
      </Drawer.Section>
    </Container>
  )
}

const styles = StyleSheet.create({
  BottomDrawerSection: {
    marginBottom: 15,
  }
})

export default DrawerContent;