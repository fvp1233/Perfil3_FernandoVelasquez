import { useEffect, useState } from "react";

// URL base de la API de planetas de Dragon Ball
const API_URL = "https://dragonball-api.com/api/planets";
const TIMEOUT_MS = 10000; // tiempo maximo de espera de la API (10 segundos)

const useDragonBallData = () => {
  const [planetData, setPlanetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // mensaje de error si falla la peticion
  const [cantidadPlanetas, setCantidadPlanetas] = useState(5); // Estado para controlar la cantidad de planetas a cargar
  const [totalPlanetas, setTotalPlanetas] = useState(0); // Total de planetas que tiene la API (meta.totalItems)

  //funcion para obtener los datos de los planetas desde la API
  const fetchPlanetData = async () => {
    // en Android fetch no tiene tiempo limite, si no hay internet se queda esperando para siempre
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      setError(null);
      const response = await fetch(`${API_URL}?limit=${cantidadPlanetas}`, {
        signal: controller.signal,
      });
      if (!response.ok) {
        throw new Error(`La API respondió con estado ${response.status}`);
      }
      const data = await response.json();

      // la API devuelve los planetas dentro de "items" y el total dentro de "meta"
      const planets = (data.items || []).map((planet) => ({
        id: planet.id,
        name: planet.name,
        image: encodeURI(planet.image), // algunas imagenes tienen espacios en la URL
        isDestroyed: planet.isDestroyed,
        description: planet.description || "Descripción no disponible.",
      }));

      setPlanetData(planets);
      setTotalPlanetas(data.meta?.totalItems || planets.length);
    } catch (error) {
      console.error("Error fetching Dragon Ball planets:", error);
      setError(
        error.name === "AbortError"
          ? "La API tardó demasiado en responder. Revisa la conexión a internet del dispositivo."
          : `No se pudieron cargar los planetas: ${error.message}`
      );
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  // indica si todavia quedan planetas por cargar en la API
  const hasMore = planetData.length < totalPlanetas;

  const loadMorePlanets = () => {
    if (!hasMore || loading) return;
    setLoading(true); // Establecemos el estado de carga en true mientras obtenemos los datos
    setCantidadPlanetas((prevCantidad) => prevCantidad + 5);
  };

  // vuelve a intentar la peticion despues de un error
  const retry = () => {
    setLoading(true);
    fetchPlanetData();
  };

  useEffect(() => {
    fetchPlanetData();
  }, [cantidadPlanetas]);

  return { planetData, loading, error, loadMorePlanets, hasMore, retry };
};

export default useDragonBallData;
