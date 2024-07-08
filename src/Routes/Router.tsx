import React, { useContext, useEffect, useState } from 'react';
import AuthRouter from './AuthRouter';
import AppRouter from './AppRouter';
import { NavigationContainer } from '@react-navigation/native';
import BotContextProvider from '../Bot/BotContext';

export const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);



    return (
        <BotContextProvider>
            <NavigationContainer>
                {isLoggedIn ? <AppRouter /> : <AuthRouter />}
            </NavigationContainer>
        </BotContextProvider>
    )
}
