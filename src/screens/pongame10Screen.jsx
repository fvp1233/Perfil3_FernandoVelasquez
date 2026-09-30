import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/pongame10ScreenStyle";
import CustomButton from "../components/CustomButton";

const Pongame10Screen = ({ onContinue }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>Fernando Miguel Velásquez Pérez</Text>

        <View style={styles.row}>
          <Text style={styles.badge}>20240216</Text>
          <Text style={styles.badge}>Grupo 2B</Text>
        </View>

        <Text style={styles.message}>Pongame 10 ya mejor</Text>
      </View>

      <CustomButton title="Ver planetas de Dragon Ball" onPress={onContinue} />
    </View>
  );
};

export default Pongame10Screen;
