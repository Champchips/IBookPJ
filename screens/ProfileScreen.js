import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import ProfileUser from "../components/ProfileUser"
const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <Text style={styles.Header}>My profile</Text>
      </View>
      <ProfileUser navigation={props.navigation}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191927",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 60,
    height: 60,
    borderTopLeftRadius: 160,
    borderTopRightRadius: 160,
    borderBottomLeftRadius: 160,
    borderBottomRightRadius: 160,
    marginVertical: 25,
    marginRight: 10,
  },
  Header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 30,
    marginTop: 30,
    paddingLeft: 20,
  },
});
export default ProfileScreen;
