import type IUseInput from "../../common/hooks/IUseInput";
import InputControl from "../common/InputControl";
import InputField from "../common/InputField";
import Label from "../../elements/Label";
import { useId } from "react";

const BaseTextInput: React.FC<BaseTextInputProps> = ({ useInput, labelText, inputType = "text" }) => {
  const inputId = useId();

  return (
    <InputField>
      <Label htmlFor={inputId} text={labelText} />
      <InputControl>
        <input className="input" id={inputId} onChange={useInput.handleOnChange} type={inputType} />
      </InputControl>
    </InputField>
  );
};

interface BaseTextInputProps {
  useInput: IUseInput;
  labelText: string;
  inputType?: string;
}

export default BaseTextInput;
