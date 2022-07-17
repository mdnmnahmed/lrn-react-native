import React from 'react';
import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { AppStack, AuthStack } from './src/navigations';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <NavigationContainer>
            {/* <AuthStack /> */}
            <AppStack />
        </NavigationContainer>
    )
}

export default App;