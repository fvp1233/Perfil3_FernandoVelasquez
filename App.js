import { useState } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

//importamos la pantalla de presentacion y la pantalla de los planetas de Dragon Ball
import Pongame10Screen from './src/screens/pongame10Screen';
import DragonBallScreen from './src/screens/DragonBallScreen';

export default function App() {
  // controla que pantalla se muestra: primero la presentacion y luego los planetas
  const [showPlanets, setShowPlanets] = useState(false);

  return (
    <View style={styles.container}>
      <ExpoStatusBar style="dark" />
      {showPlanets ? (
        <DragonBallScreen onBack={() => setShowPlanets(false)} />
      ) : (
        <Pongame10Screen onContinue={() => setShowPlanets(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 50,
  },
});
