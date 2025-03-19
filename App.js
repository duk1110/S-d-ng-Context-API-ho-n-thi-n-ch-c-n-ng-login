import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';

const AppContext = createContext();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Trang Chủ' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Cá Nhân' }} />
    </Tab.Navigator>
);

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <NavigationContainer>
                {isLoggedIn ? (
                    <MainTabScreen />
                ) : (
                    <Stack.Navigator>
                        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Đăng Nhập' }} />
                    </Stack.Navigator>
                )}
            </NavigationContainer>
        </AppContext.Provider>
    );
}

export { AppContext };
