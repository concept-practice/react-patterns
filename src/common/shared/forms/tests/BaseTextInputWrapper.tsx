import BaseTextInput from "../base/BaseTextInput";
import useInput from "../hooks/UseInput";

const BaseTextInputWrapper: React.FC<BaseTextInputWrapperProps> = ({ required, labelText }) => {
  const input = useInput();

  return <BaseTextInput labelText={labelText} required={required} useInput={input} />;
};

interface BaseTextInputWrapperProps {
  labelText: string;
  required: boolean;
}

export default BaseTextInputWrapper;
