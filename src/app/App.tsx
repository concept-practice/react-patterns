import { TextInput } from "../common/shared";
import useInput from "../common/shared/common/hooks/UseInput";

const App: React.FC = () => {
  const modelInput = useInput();

  return (
    <div>
      <TextInput useInput={modelInput} />
      {modelInput.value}
    </div>
  );
};

export default App;
