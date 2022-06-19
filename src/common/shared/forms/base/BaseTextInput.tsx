import { CheckIcon, ExclamationTriangleIcon, InputControl, InputField, Label } from "../..";
import ComponentBooleanToggle from "../../../hocs/ComponentBooleanToggle";
import type IUseInput from "../hooks/IUseInput";
import type ProjectionProperties from "../../common/ProjectionProperties";
import type { ReactNode } from "react";
import ValidationMessage from "./ValidationMessage";
import ValueDefaults from "../../../../utilities/defaults/ValueDefaults";
import useDirtyValidation from "../hooks/UseDirtyValidation";
import { useId } from "react";

const BaseTextInput: React.FC<BaseTextInputProperties> = ({
  required = ValueDefaults.Boolean,
  children,
  useInput,
  labelText,
  inputType = "text",
}) => {
  const inputId = useId();
  const [dirty, isDirtyValid, onFocusHandler] = useDirtyValidation(useInput);

  const isDangerOrSuccess = (): string => {
    if (dirty) {
      if (isDirtyValid) {
        return "is-success";
      }
      return "is-danger";
    }
    return "";
  };

  return (
    <InputField>
      <Label htmlFor={inputId} text={labelText} />
      <InputControl options="has-icons-left has-icons-right">
        <input
          aria-label={`${inputType} input`}
          className={`input ${isDangerOrSuccess()}`}
          id={inputId}
          onChange={useInput.handleOnChange}
          onFocus={(event): void => {
            useInput.handleOnChange(event);
            onFocusHandler();
          }}
          required={required}
          type={inputType}
          value={useInput.value}
        />
        {children}
        <ComponentBooleanToggle
          boolValue={isDirtyValid}
          falseValue={<ExclamationTriangleIcon options="is-small is-right" />}
          trueValue={<CheckIcon options="is-small is-right" />}
        />
      </InputControl>
      <ValidationMessage validInput={isDirtyValid} validationMessage={useInput.validationMessage} />
    </InputField>
  );
};

interface BaseTextInputProperties extends ProjectionProperties {
  labelText: string;
  useInput: IUseInput;
  children?: ReactNode;
  inputType?: string;
  required?: boolean;
}

export default BaseTextInput;
