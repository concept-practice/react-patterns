import { useEffect, useState } from "react";

export default function useBooleanToggle<T>(onTrue: T, onFalse: T, boolValue: boolean): T {
  const [currentValue, setCurrentValue] = useState<T>(onTrue);

  useEffect(() => {
    if (boolValue) {
      setCurrentValue(onTrue);
    } else {
      setCurrentValue(onFalse);
    }
  }, [boolValue, onTrue, onFalse]);

  return currentValue;
}
