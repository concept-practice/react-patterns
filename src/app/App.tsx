import { PasswordInput, TextInput } from "../common/shared";
import useInput from "../common/shared/forms/hooks/UseInput";

const App: React.FC = () => {
  const modelInput = useInput();
  const passwordInput = useInput();

  return (
    <div>
      <TextInput labelText="Username" useInput={modelInput} />
      {modelInput.value}
      <PasswordInput useInput={passwordInput} />
      {passwordInput.value}
    </div>
  );
};

export default App;
