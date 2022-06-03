import BaseTextInput from "../base/BaseTextInput";
import type IUseInput from "../hooks/IUseInput";

const PasswordInput: React.FC<PasswordInputProps> = ({ labelText = "Password", useInput }) => {
  return <BaseTextInput inputType="password" labelText={labelText} useInput={useInput} />;
};

interface PasswordInputProps {
  labelText?: string;
  useInput: IUseInput;
}

export default PasswordInput;
