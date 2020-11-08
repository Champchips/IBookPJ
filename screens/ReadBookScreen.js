import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ReadBook from "../components/ReadBook";
const ReadBookScreen = (props) =>{
    return(
        <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Profile");
          }}
        >
          <Image
            style={styles.logo}
            source={require("../images/Profile.jpg")}
          />
        </TouchableOpacity>
        </View>
        <ReadBook navigation={props.navigation}/>
    </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#191927",
    },
    headerContainer: {
        flexDirection: "row-reverse",
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
});

export default ReadBookScreen;