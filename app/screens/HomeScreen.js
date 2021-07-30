import React from 'react';
import { Alert, Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.LogoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text>Sell What You Don't Need</Text>
            </View>

            <View style={styles.Loginbtn}>
                <Text
                    style={styles.btnSignIn}
                    onPress={() => navigation.navigate('SignIn')}
                >Sign In</Text>
            </View>
            <View style={styles.Registerbtn}>
                <Text style={styles.btnSignUp}>Sign Up !</Text>
            </View>
        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
    },
    LogoContainer: {
        alignItems: "center",
        position: "absolute",
        top: "10%"
    },
    Loginbtn: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
        justifyContent: "center",
        alignItems: "center"
    },
    Registerbtn: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
        justifyContent: "center",
        alignItems: "center"
    },
    btnSignIn: {
        fontSize: 32,
        color: "white"
    },
    btnSignUp: {
        fontSize: 32,
        color: "white"
    }
});

export default HomeScreen;