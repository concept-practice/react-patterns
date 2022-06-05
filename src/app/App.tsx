import { PasswordInput, TextInput } from "../common/shared";
import { emptyPlanet, getPlanets } from "./PlanetResponse";
import useDataFetch from "../common/hooks/use-data-fetch/UseDataFetch";
import useInput from "../common/shared/forms/hooks/UseInput";

const App: React.FC = () => {
  const modelInput = useInput();
  const passwordInput = useInput();
  const planets = useDataFetch(emptyPlanet, getPlanets);

  return (
    <div>
      <TextInput labelText="Username" useInput={modelInput} />
      {modelInput.value}
      <PasswordInput useInput={passwordInput} />
      {passwordInput.value}
      {planets.results.map((planet): JSX.Element => {
        return <p key={planet.name}>{planet.name} </p>;
      })}
    </div>
  );
};

export default App;
