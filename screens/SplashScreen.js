import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

const SplashScreen = (props) => {
  const [authLoaded, setAuthLoaded] = useState(false);

  const user = useSelector((state) => state.users.value);



  useEffect(() => {  
    setTimeout(() => {
      setAuthLoaded(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      if (user.token) {
        props.navigation.replace("HomeScreen");
      } else {
        props.navigation.replace("MailScreen");
      }
    }
  }, [authLoaded, props.navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Image style={styles.loader} source={require("../assets/loader.gif")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0031B8",
  },

  loader: {
    width: 50,
    height: 50,
  },

  logo: {
    width: 300,
    height: 100,
  },
});

export default SplashScreen;
