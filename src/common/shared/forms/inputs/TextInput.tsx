import BaseTextInput from "../base/BaseTextInput";
import type IUseInput from "../hooks/IUseInput";

const TextInput: React.FC<TextInputProps> = ({ labelText, useInput }) => {
  return <BaseTextInput labelText={labelText} useInput={useInput} />;
};

interface TextInputProps {
  labelText: string;
  useInput: IUseInput;
}

export default TextInput;
