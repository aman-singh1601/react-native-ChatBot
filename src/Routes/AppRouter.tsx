import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';



//import screens
import ChatScreen from '../Screens/ChatScreen';
import { useTheme } from 'react-native-paper';

export type AppStackParamList = {
    ChatScreen: undefined;
};

const RootStack = createNativeStackNavigator<AppStackParamList>();


export default function AppRouter() {
    const theme = useTheme();
    return (
        <RootStack.Navigator initialRouteName="ChatScreen">
            <RootStack.Screen
                name='ChatScreen'
                component={ChatScreen}
                options={{
                    title: "Bot",
                    headerRight: () => <Icon name="more-vertical" size={25} color="#fff" />
                    ,
                    headerStyle: {
                        backgroundColor: "#584cd7",
                    },
                    headerTintColor: theme.colors.onSurface,
                }}
            />
        </RootStack.Navigator>
    )
}