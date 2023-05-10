// App.js contains the startup component of the application.

import {
    Button,
    View,
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';
import React, {useState} from 'react';

// Import our components. See the components directory
import Login from "./Login";
import Welcome from "./Welcome";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from "./SignUp";

const FirstScreen = () => {
    const [user, setUser] = useState(null);

    // Conditionally show either the welcome component or the login component.
    if (!user) {
        // Pass the setUser function as a prop to the child component, so it can set the logged-in user state.
        return <Login setUser={setUser}/>
    }
    else {
        // Pass the currently logged-in user information to the Welcome component
        return <Welcome user={user}/>
    }
};


export default FirstScreen;