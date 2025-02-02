import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from '../pages/SplashScreen';
import Onboarding from '../pages/Onboarding';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Results from '../pages/Results';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import EmailConfirmation from '../pages/EmailConfirmation';
import Favorites from '../pages/Favorites/Index';
import InsertAd from '../pages/InsertAd';
import MyAds from '../pages/MyAds/Index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackProfile from './StackProfile';
import StackHome from './stackHome';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const Tab = createBottomTabNavigator();
export default function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor:"white",
                headerShown:false,
                tabBarStyle:{
                    height:60,
                    borderTopWidth:0,
                },
                tabBarBackground:() =>(
                    <LinearGradient  colors={['#1C0029',  '#D92641']} style={{height:60, justifyContent:'center'}}
                    start={{ x: 0, y: 0.5 }}
                end={{x:1, y:0.5}}/>
                  ),
                  
            }}>
            <Tab.Screen
                name="Início"
                component={StackHome}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused = true, color, size }: any) => {
                        let iconName = focused ? 'home' : 'home-outline'
                        return <Ionicons name={iconName} size={30} color="white" />
                    }
                }}

            />

            <Tab.Screen
                name="Inserir anúncio"
                component={InsertAd}
                options={{
                    tabBarIcon: ({ focused = true, color, size }: any) => {
                        let iconName = focused ? 'create' : 'create-outline'
                        return <Ionicons name={iconName} size={30} color="white" />
                    }
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={StackProfile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused = true, color, size }: any) => {
                        let iconName = focused ? 'person' : 'person-outline'
                        return <Ionicons name={iconName} size={30} color="white" />
                    }
                }} />

            <Tab.Screen
                name="Carrinho"
                component={Cart}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused = true, color, size }: any) => {
                        let iconName = focused ? 'cart' : 'cart-outline'
                        return <Ionicons name={iconName} size={30} color="white" />
                    }
                }} />

        </Tab.Navigator>

    );
}

