import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../screens/SplashScreen";
import MailScreen from "../screens/MailScreen";
import PasswordScreen from "../screens/PasswordScreen";
import ProfileCreation from "../screens/ProfileCreation";
import TagCreation from "../screens/TagCreation";
import HomeScreen from "../screens/HomeScreen";
import contactScreen from "../screens/contactScreen";
import SignInPonctuelScreen from "../screens/SignInPonctuelScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{ animationEnabled: false, header: () => null }}
          component={SplashScreen}
        />
        {/* <Stack.Screen
          name="SignInPonctuelScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={SignInPonctuelScreen}
        /> */}
        <Stack.Screen
          name="MailScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={MailScreen}
        />
        <Stack.Screen
          name="PasswordScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={PasswordScreen}
        />
        <Stack.Screen
          name="ProfileCreation"
          options={{ animationEnabled: true, header: () => null }}
          component={ProfileCreation}
        />
        <Stack.Screen
          name="TagCreation"
          options={{ animationEnabled: true, header: () => null }}
          component={TagCreation}
        />
        <Stack.Screen
          name="HomeScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="contactScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={contactScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
