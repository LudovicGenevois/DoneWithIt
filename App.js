import React from 'react';
import { StyleSheet, SafeAreaView, Button, Alert, Platform, StatusBar, View, Dimensions} from 'react-native';
import { useDimensions } from '@react-native-community/hooks/lib/useDimensions';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: "30%"
        }}
      >

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  whiteText: {
    color: 'white'
  }
});
