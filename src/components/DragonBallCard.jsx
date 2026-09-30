import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../styles/DragonBallStyle";

const DragonBallCard = ({ planet }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: planet.image }} style={styles.image} />
      </View>
      <Text style={styles.number}>#{planet.id}</Text>
      <Text style={styles.title}>{planet.name}</Text>
      <Text style={[styles.status, planet.isDestroyed ? styles.destroyed : styles.active]}>
        {planet.isDestroyed ? "Destruido" : "Activo"}
      </Text>
      <Text style={styles.text}>{planet.description}</Text>
    </View>
  );
};
export default DragonBallCard;
