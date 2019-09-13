import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/FontAwesome5';

// import Akun from '../screens/tabs/akun';
// import Dashboard from '../screens/tabs/dashboard';
import dashboard from './home/dashboard';
import dashboard2 from './home/dashboard2';
import login from './users/login';
import Akun from './users/akun';
import Akun2 from './users/akun2';
import dashboard3 from './home/dashboard3';

export const Tabs = createMaterialTopTabNavigator({

    Dashboard: {
        screen: dashboard2, 
        navigationOptions: {
            title:'Home',
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />,
        },
    },
    Notification: {
        screen: dashboard3,
        navigationOptions: {
            title:'Notifications',
            tabBarIcon: ({ tintColor }) => <Icons name="bell" size={25} color={tintColor} />,
        },
    },
    Info: {
        screen: Akun,
        navigationOptions: {
            title:'Info',
            tabBarIcon: ({ tintColor }) => <Icon name="info-with-circle" size={25} color={tintColor} />,
        },
    },
    Akun: {
        screen: Akun2,
        navigationOptions: {
            title:'Account',
            tabBarIcon: ({ tintColor }) => <Icon name="user" size={25} color={tintColor} />,
        },
    },
}, {
        lazy: true,
        initialRouteName: 'Dashboard',
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        showIcon: true,
        shifting: true,
        animationEnabled: true,

        tabBarOptions: {
            showIcon: true,
            showLabel: true,
            labelStyle: {
                fontSize: 8, marginTop: 0, color: '#0f1d2d', fontFamily:'Montserrat-LightItalic'
            },
            activeTintColor: '#2C338B',
            inactiveTintColor: 'rgba(214, 218, 216, 0.6)',
            tabStyle: { height: 65, backgroundColor: '#FCFCFC', opacity: 100, borderTopWidth: 1, borderTopColor: '#e3e9ed', elevation: 0, padding: 0 },
            inactiveBackgroundColor: '#FCFCFC',
        }
    });