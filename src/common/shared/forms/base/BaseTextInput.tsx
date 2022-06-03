import type IUseInput from "../hooks/IUseInput";
import Icon from "../../elements/icons/Icon";
import InputControl from "../common/InputControl";
import InputField from "../common/InputField";
import Label from "../../elements/Label";
import type ProjectionProps from "../../common/ProjectionProps";
import type { ReactNode } from "react";
import { useId } from "react";

const BaseTextInput: React.FC<BaseTextInputProps> = ({ children, useInput, labelText, inputType = "text" }) => {
  const inputId = useId();

  return (
    <InputField>
      <Label htmlFor={inputId} text={labelText} />
      <InputControl options="has-icons-left has-icons-right">
        <input
          className="input"
          id={inputId}
          onChange={useInput.handleOnChange}
          type={inputType}
          value={useInput.value}
        />
        {children}
        <Icon iconType="fas fa-check" options="is-small is-right" />
      </InputControl>
    </InputField>
  );
};

interface BaseTextInputProps extends ProjectionProps {
  children?: ReactNode;
  useInput: IUseInput;
  labelText: string;
  inputType?: string;
}

export default BaseTextInput;
