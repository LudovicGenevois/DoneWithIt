import React, { useState } from 'react';
import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../config/colors';

function SignInScreen({ navigation }) {
    const [email, setEmail] = useState(email);
    const [password, setPassword] = useState(password);

    const handleCredentials = (email, password) => {
        if (email !== undefined && password !== undefined) {
            if (email === "ludovic.genevois@hotmail.fr" && password === "Ludovic450") {
                return true;
            }
        }
        return false;
    }

    return (
        //container principal
        <SafeAreaView style={styles.mainContainer}>
            {/* logo genre connexion */}
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.textLogo}>Connexion</Text>
            </View>
            {/* une vue pour l'identifiant */}
            <View style={styles.emailView}>
                <View styles={styles.bgEmailView}>
                </View>
                <TextInput
                    style={styles.textInputEmailView}
                    placeholder="Email"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>
            {/* une vue pour le mdp */}
            <View style={styles.passwordView}>
                <TextInput
                    style={styles.textInputPasswordView}
                    placeholder="Password"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
            </View>
            {/* une vue pour le bouton OK */}
            <View style={styles.btnSubmitView}>
                <Button
                    title="OK"
                    onPress={() => handleCredentials(email, password) ? navigation.navigate('Logged') : Alert.alert("Echec de connexion", "Email ou mot de passe incorrect. Veuilliez reessayer.", [{ title: "OK" }])}
                    color="white" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        height: 100,
        alignItems: "center",
        backgroundColor: "#ffccc0"
    },
    logoContainer: {
        height: 100,
        alignItems: "center",
        top: "10%"
    },
    logo: {
        width: 100,
        height: 100,
    },
    textLogo: {
        top: 15,
        fontSize: 18,
        color: "#808080"
    },
    emailView: {
        width: "80%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        top: "20%",
        backgroundColor: "#f6e5e1",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    textInputEmailView: {
        textAlign: "center",
        fontSize: 22,
        width: "100%",
    },
    passwordView: {
        width: "80%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        top: "25%",
        backgroundColor: "#f6e5e1",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
    },
    textInputPasswordView: {
        textAlign: "center",
        fontSize: 22,
        width: "100%",
    },
    btnSubmitView: {
        width: "30%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        top: "30%",
        backgroundColor: "#d8d3d2",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    }

});

export default SignInScreen;