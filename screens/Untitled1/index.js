import * as React from 'react';
import { Text, View } from 'react-native';
import Constants from 'expo-constants';
export default function App() {
  return <View style={{
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8
  }}>
      <Text style={{
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
    }}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <View>
      <View style={{
        backgroundColor: "#F0F0F1"
      }}>
        <Text>Something else here</Text>
        </View>
      </View>
    </View>;
}