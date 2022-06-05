import { useEffect, useState } from "react";
import type IUseInput from "./IUseInput";

export default function useDirtyValidation(
  useInput: IUseInput
): [dirty: boolean, isDirtyValid: boolean, onFocusHandler: () => void] {
  const [dirty, setDirty] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(true);

  const onFocusHandler = (): void => {
    setDirty(true);
    setValid(useInput.valid);
  };

  useEffect(() => {
    if (dirty) {
      setValid(useInput.valid);
    }
  }, [useInput, dirty]);

  return [dirty, valid, onFocusHandler];
}
