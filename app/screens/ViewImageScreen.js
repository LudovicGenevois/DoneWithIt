import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeImage}></View>
            <View style={styles.deleteImage}></View>
            <Image
                resizeMode='center'
                style={styles.image}
                source={require('../assets/chair.jpg')}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    closeImage: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: "10%",
        left: "5%",
    },
    deleteImage: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: "10%",
        right: "5%",
    },
    btnCloseImage: {
        width: "100%",
        height: "100%"
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%"
    }
})

export default ViewImageScreen;