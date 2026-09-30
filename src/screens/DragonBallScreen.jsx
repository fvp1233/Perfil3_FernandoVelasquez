import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../styles/DragonBallScreenStyle";
import CustomInput from "../components/CustomInput";
import DragonBallCard from "../components/DragonBallCard";
import CustomButton from "../components/CustomButton";
import useDragonBallData from "../hooks/useDragonBallData";

const DragonBallScreen = ({ onBack }) => {
  const { planetData, loading, loadMorePlanets, hasMore } = useDragonBallData();

  const [searchText, setSearchText] = useState("");

  const filteredPlanets = planetData.filter((planet) =>
    planet.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.backText} onPress={onBack}>← Volver</Text>
      <Text style={styles.title}>Planetas de Dragon Ball</Text>
      <Text style={styles.text}>
        En esta pantalla cargaremos información de los planetas de Dragon Ball desde la API...
      </Text>

      <CustomInput
        placeholder="Buscar planeta por nombre..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      {loading ? (
        <Text style={styles.loadingText}>Cargando planetas...</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {filteredPlanets.length > 0 ? (
            filteredPlanets.map((planet, index) => (
              <DragonBallCard key={planet.id || index} planet={planet} />
            ))
          ) : (
            <Text style={styles.text}>No se encontraron planetas con ese nombre.</Text>
          )}
        </ScrollView>
      )}

      {hasMore ? (
        <CustomButton
          title="Al dar click en este botón se cargarán 5 planetas más"
          onPress={() => loadMorePlanets()}
        />
      ) : (
        !loading && <Text style={styles.loadingText}>Ya se cargaron todos los planetas.</Text>
      )}
    </View>
  );
};

export default DragonBallScreen;
