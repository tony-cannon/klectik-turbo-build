import { View } from 'Tamagui';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { useAuth } from '@utilities/contexts/AuthContext';

import {
  House,
  MagnifyingGlass,
  HeartHalf,
  UserSquare,
  PlusCircle,
} from 'phosphor-react-native';

export const unstable_settings = {
  initialRouteName: 'main',
};

export const BottomTabsNavigator = () => {
  return (
    <>
      <Tabs
        sceneContainerStyle={{
          backgroundColor: '#000',
        }}
        screenOptions={{
          headerTitleAlign: 'left',
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopColor: '#000',
            shadowOpacity: 0,
          },
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tabs.Screen
          name='main'
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ size, color }) => <House size={35} color={'#fff'} />,
          }}
        />
        <Tabs.Screen
          name='search'
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ size, color }) => (
              <MagnifyingGlass size={35} color={'#fff'} />
            ),
          }}
        />

        <Tabs.Screen
          name='create'
          options={{
            tabBarIcon: ({ size, color }) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'red',
                    width: Platform.OS === 'ios' ? 50 : 60,
                    height: Platform.OS === 'ios' ? 50 : 60,
                    top: Platform.OS === 'ios' ? -10 : -20,
                    borderRadius: Platform.OS === 'ios' ? 25 : 30,
                  }}
                >
                  <PlusCircle size={size} color={'#fff'} />
                </View>
              );
            },
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              if (user === null) {
                setRedirect('(tabs)/create');
                setOpenAuthBottomSheet(true);
                e.preventDefault();
              }
            },
          })}
        />

        <Tabs.Screen
          name='add'
          options={{
            tabBarLabel: 'Add',
            tabBarIcon: ({ size, color }) => (
              <HeartHalf size={35} color={'#fff'} />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ size, color }) => (
              <UserSquare size={35} color={'#fff'} />
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              if (user === null) {
                setRedirect('(tabs)/profile');
                setOpenAuthBottomSheet(true);
                e.preventDefault();
              }
            },
          })}
        />
      </Tabs>
      <AuthBottomSheet redirect={redirect} />
    </>
  );
};
