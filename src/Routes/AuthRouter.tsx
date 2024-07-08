import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


//import screens
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';

export type AuthStackParamList = {
    Signup: undefined;
    Login: undefined;
};

const RootStack = createNativeStackNavigator<AuthStackParamList>();


export default function AuthRouter() {
    return (
        <RootStack.Navigator initialRouteName="Signup">
            <RootStack.Screen
                name='Signup'
                component={Signup}
            />
            <RootStack.Screen
                name='Login'
                component={Login}
            />
        </RootStack.Navigator>
    )
}
