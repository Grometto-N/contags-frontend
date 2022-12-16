import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTogglePasswordVisibility } from "../module/useTogglePasswordVisibility";
import { useTogglePasswordVisibility2 } from "../module/useTogglePasswordVisibility2";
import { updateToken } from "../reducers/users";

const backendAdress = "http://172.16.191.9:3000";

export default function PasswordScreen({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.value);
  console.log("start", user);
  const handleReturn = () => {
    navigation.navigate("MailScreen");
  };

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } =
    useTogglePasswordVisibility2();
  const [Password1, setPassword1] = useState("");
  const [Password2, setPassword2] = useState("");

  let iconV = null;
  if (Password1 === Password2 && Password1.length > 0) {
    iconV = (
      <View style={styles.Info}>
        <Text style={styles.textInfoV}>Mots de passe indentique</Text>
        <Entypo name="check" size={20} color="#21AC14" style={styles.icon} />
      </View>
    );
  }
  if (Password1 !== Password2 && Password1.length > 0) {
    iconV = (
      <View style={styles.Info}>
        <Text style={styles.textInfoX}>Mots de passe différents</Text>
        <Entypo name="cross" size={25} color="#D90000" style={styles.icon} />
      </View>
    );
  }

  const handleSubmit = () => {
    // console.log("je rentre")
    if (Password1 === Password2) {
      console.log("route", user);
      fetch(`${backendAdress}/users/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailMain: user.emailMain,
          password: Password1,
        }),
      })
        .then((response) => response.json())

        .then((data) => {
          // console.log("je rerentre")
          // console.log(data);
          if (data.result) {
            dispatch(updateToken(data.token));
            navigation.navigate("ProfileCreation2");
            console.log("fin");
          }
        });
    }
  };

  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <View style={styles.divImage}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
      </View>
      <View>
        <Text style={styles.text}>
          Pour finaliser votre inscription, veuillez saisir un mot de passe
        </Text>
      </View>
      <View style={styles.pass}>
        <Text style={styles.text}>Saisissez votre mot de passe</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry={passwordVisibility}
            value={Password1}
            onChangeText={(text) => {
              setPassword1(text);
            }}
          />
          <Pressable
            style={styles.iconDivEye}
            onPress={handlePasswordVisibility}
          >
            <FontAwesome name={rightIcon} size={22} color="#0031b8" />
          </Pressable>
        </View>
        <Text style={styles.text}>Saisir de nouveau</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry={passwordVisibility2}
            value={Password2}
            onChangeText={(text) => setPassword2(text)}
          />
          <Pressable
            style={styles.iconDivEye}
            onPress={handlePasswordVisibility2}
          >
            <FontAwesome name={rightIcon2} size={22} color="#0031b8" />
          </Pressable>
        </View>
        {iconV}
      </View>
      <View style={styles.caseButton}>
        <TouchableOpacity style={styles.button} onPress={() => handleReturn()}>
          <FontAwesome color="#ffffff" name="chevron-left" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => handleSubmit()}>
          <FontAwesome color="#ffffff" name="chevron-right" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  divImage: {
    alignItems: "center",
  },
  logo: {
    width: "80%",
    height: "30%",
    top: "40%",
  },
  pass: {
    marginTop: "20%",
  },
  passwordContainer: {
    flexDirection: "row",
    paddingBottom: 10,
    alignItems: "center",
  },
  Info: {
    flexDirection: "row",
  },
  textInfoV: {
    marginLeft: "10%",
    color: "#21AC14",
  },
  textInfoX: {
    marginLeft: "10%",
    color: "#D90000",
  },
  text: {
    color: "#0031B8",
    marginLeft: "10%",
    marginRight: "5%",
  },
  input: {
    width: "70%",
    height: 35,
    marginLeft: "10%",
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    borderColor: "#0031B8",
    borderWidth: 1.5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  iconDivEye: {
    borderColor: "#0031B8",
    borderColor: "#0031B8",
    borderWidth: 1.5,
    padding: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  icon: {
    marginLeft: 50,
  },
  caseButton: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: "100%",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#0031B8",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginLeft: "5%",
  },
  button2: {
    backgroundColor: "#0031B8",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginRight: "5%",
  },
});
