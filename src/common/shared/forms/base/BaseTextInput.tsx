import { Icon, InputControl, InputField, Label } from "../..";
import type IUseInput from "../hooks/IUseInput";
import type ProjectionProps from "../../common/ProjectionProps";
import type { ReactNode } from "react";
import ValidationMessage from "./ValidationMessage";
import ValueDefaults from "../../../../utilities/defaults/ValueDefaults";
import useBooleanToggle from "../../../hooks/use-boolean-toggle/UseBooleanToggle";
import { useId } from "react";

const BaseTextInput: React.FC<BaseTextInputProps> = ({
  required = ValueDefaults.Boolean,
  children,
  useInput,
  labelText,
  inputType = "text",
}) => {
  const inputId = useId();
  const isDangerOrSuccess = useBooleanToggle("is-success", "is-danger", useInput.valid);

  return (
    <InputField>
      <Label htmlFor={inputId} text={labelText} />
      <InputControl options="has-icons-left has-icons-right">
        <input
          className={`input ${isDangerOrSuccess}`}
          id={inputId}
          onChange={useInput.handleOnChange}
          required={required}
          type={inputType}
          value={useInput.value}
        />
        {children}
        <Icon iconType="fas fa-check" options="is-small is-right" />
      </InputControl>
      <ValidationMessage validInput={useInput.valid} validationMessage={useInput.validationMessage} />
    </InputField>
  );
};

interface BaseTextInputProps extends ProjectionProps {
  labelText: string;
  useInput: IUseInput;
  children?: ReactNode;
  inputType?: string;
  required?: boolean;
}

export default BaseTextInput;
