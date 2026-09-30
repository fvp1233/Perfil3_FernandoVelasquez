import { StyleSheet } from "react-native";

// Estilos de la tarjeta de cada planeta de Dragon Ball
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: "#F85B1A",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    resizeMode: "cover",
  },
  number: {
    fontSize: 14,
    fontWeight: "600",
    color: "#888",
    marginTop: 10,
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
  status: {
    alignSelf: "center",
    fontSize: 13,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    marginTop: 5,
    overflow: "hidden",
  },
  destroyed: {
    backgroundColor: "#D32F2F",
  },
  active: {
    backgroundColor: "#388E3C",
  },
  text: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
});

export default styles;
