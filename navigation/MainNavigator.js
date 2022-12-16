import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../screens/SplashScreen";
import MailScreen from "../screens/MailScreen";
import PasswordScreen from "../screens/PasswordScreen";
import ProfileCreation2 from "../screens/profileCreation2";
import TagCreation from "../screens/TagCreation";
import HomeScreen from "../screens/HomeScreen";
import contactScreen from "../screens/contactScreen";

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
          name="ProfileCreation2"
          options={{ animationEnabled: true, header: () => null }}
          component={ProfileCreation2}
        />
        <Stack.Screen
          name="TagCreation"
          options={{ animationEnabled: true, header: () => null }}
          component={TagCreation}
        />
        <Stack.Screen
          name="Home"
          options={{ animationEnabled: true, header: () => null }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Contact"
          options={{ animationEnabled: true, header: () => null }}
          component={contactScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
