import { useState } from "react";

export default function useToggle<T>(initial: T, alternate: T): [current: T, toggle: () => void] {
  const [active, setActive] = useState<T>(initial);

  const toggle = (): void => {
    if (active === initial) {
      setActive(alternate);
    } else {
      setActive(initial);
    }
  };

  return [active, toggle];
}
