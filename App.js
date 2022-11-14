import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import foto from './assets/Foto-Perfil.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lucas Teixeira</Text>
      <Image source={foto}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
