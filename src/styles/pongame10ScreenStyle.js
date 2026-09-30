import { StyleSheet } from "react-native";

// Estilos de la pantalla de presentacion
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    borderTopWidth: 6,
    borderTopColor: "#F85B1A",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#222",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    marginTop: 16,
  },
  badge: {
    fontSize: 16,
    fontWeight: "600",
    color: "#F85B1A",
    backgroundColor: "#FFF1EA",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    overflow: "hidden",
  },
  message: {
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
    color: "#555",
    marginTop: 20,
  },
});

export default styles;
