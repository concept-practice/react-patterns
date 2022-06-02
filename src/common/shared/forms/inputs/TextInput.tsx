import BaseTextInput from "../base/BaseTextInput";
import type IUseInput from "../../common/hooks/IUseInput";

const TextInput: React.FC<TextInputProps> = ({ useInput }) => {
  return <BaseTextInput labelText="Model:" useInput={useInput} />;
};

interface TextInputProps {
  useInput: IUseInput;
}

export default TextInput;
