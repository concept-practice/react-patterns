import type IUseInput from "../hooks/IUseInput";
import InputControl from "../common/InputControl";
import InputField from "../common/InputField";
import Label from "../../elements/Label";
import type ProjectionProps from "../../common/ProjectionProps";
import { useId } from "react";

const BaseTextInput: React.FC<BaseTextInputProps> = ({ children, useInput, labelText, inputType = "text" }) => {
  const inputId = useId();

  return (
    <InputField>
      <Label htmlFor={inputId} text={labelText} />
      <InputControl>
        <input className="input" id={inputId} onChange={useInput.handleOnChange} type={inputType} />
      </InputControl>
      {children}
    </InputField>
  );
};

interface BaseTextInputProps extends ProjectionProps {
  useInput: IUseInput;
  labelText: string;
  inputType?: string;
}

export default BaseTextInput;