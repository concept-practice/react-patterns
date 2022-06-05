import type SwapiResponse from "./SwapiResponse";
import axios from "axios";

interface PlanetResponse {
  name: string;
}

const emptyPlanet = (): SwapiResponse<PlanetResponse> => {
  return {
    results: [],
  };
};

const getPlanets = async (): Promise<SwapiResponse<PlanetResponse>> => {
  const result = await axios.get<SwapiResponse<PlanetResponse>>("https://swapi.dev/api/planets/");

  return result.data;
};

export type { PlanetResponse };
export { emptyPlanet, getPlanets };
