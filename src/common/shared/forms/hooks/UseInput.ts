import type IUseInput from "./IUseInput";
import type React from "react";
import ValueDefaults from "../../../../utilities/defaults/ValueDefaults";
import { useState } from "react";

export default function useInput(): IUseInput {
  const [value, setValue] = useState<string>(ValueDefaults.String);
  const [valid, setValid] = useState<boolean>(true);
  const [validationMessage, setValidationMessage] = useState<string>(ValueDefaults.String);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    setValid(event.target.validity.valid);
    setValidationMessage(event.target.validationMessage);
  };

  return {
    handleOnChange,
    valid,
    validationMessage,
    value,
  };
}
