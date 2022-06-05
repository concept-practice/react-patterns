import { CheckIcon, ExclamationTriangleIcon, InputControl, InputField, Label } from "../..";
import ComponentBooleanToggle from "../../../hocs/ComponentBooleanToggle";
import type IUseInput from "../hooks/IUseInput";
import type ProjectionProps from "../../common/ProjectionProps";
import type { ReactNode } from "react";
import ValidationMessage from "./ValidationMessage";
import ValueDefaults from "../../../../utilities/defaults/ValueDefaults";
import useBooleanToggle from "../../../hooks/use-boolean-toggle/UseBooleanToggle";
import useDirtyValidation from "../hooks/UseDirtyValidation";
import { useId } from "react";

const BaseTextInput: React.FC<BaseTextInputProps> = ({
  required = ValueDefaults.Boolean,
  children,
  useInput,
  labelText,
  inputType = "text",
}) => {
  const inputId = useId();
  const [dirty, isDirtyValid, onFocusHandler] = useDirtyValidation(useInput);
  const isDangerOrSuccess = useBooleanToggle(
    useBooleanToggle("is-success", "is-danger", isDirtyValid),
    ValueDefaults.String,
    dirty
  );

  return (
    <InputField>
      <Label htmlFor={inputId} text={labelText} />
      <InputControl options="has-icons-left has-icons-right">
        <input
          className={`input ${isDangerOrSuccess}`}
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

interface BaseTextInputProps extends ProjectionProps {
  labelText: string;
  useInput: IUseInput;
  children?: ReactNode;
  inputType?: string;
  required?: boolean;
}

export default BaseTextInput;
