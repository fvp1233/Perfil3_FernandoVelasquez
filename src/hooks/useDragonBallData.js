import { useEffect, useState } from "react";

// URL base de la API de planetas de Dragon Ball
const API_URL = "https://dragonball-api.com/api/planets";

const useDragonBallData = () => {
  const [planetData, setPlanetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cantidadPlanetas, setCantidadPlanetas] = useState(5); // Estado para controlar la cantidad de planetas a cargar
  const [totalPlanetas, setTotalPlanetas] = useState(0); // Total de planetas que tiene la API (meta.totalItems)

  //funcion para obtener los datos de los planetas desde la API
  const fetchPlanetData = async () => {
    try {
      const response = await fetch(`${API_URL}?limit=${cantidadPlanetas}`);
      const data = await response.json();

      // la API devuelve los planetas dentro de "items" y el total dentro de "meta"
      const planets = (data.items || []).map((planet) => ({
        id: planet.id,
        name: planet.name,
        image: planet.image,
        isDestroyed: planet.isDestroyed,
        description: planet.description || "Descripción no disponible.",
      }));

      setPlanetData(planets);
      setTotalPlanetas(data.meta?.totalItems || planets.length);
    } catch (error) {
      console.error("Error fetching Dragon Ball planets:", error);
    } finally {
      setLoading(false);
    }
  };

  // indica si todavia quedan planetas por cargar en la API
  const hasMore = planetData.length < totalPlanetas;

  const loadMorePlanets = () => {
    if (!hasMore) return;
    setLoading(true); // Establecemos el estado de carga en true mientras obtenemos los datos
    setCantidadPlanetas((prevCantidad) => prevCantidad + 5);
  };

  useEffect(() => {
    fetchPlanetData();
  }, [cantidadPlanetas]);

  return { planetData, loading, loadMorePlanets, hasMore };
};

export default useDragonBallData;
