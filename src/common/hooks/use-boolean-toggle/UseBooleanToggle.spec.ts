import { renderHook } from "@testing-library/react";
import useBooleanToggle from "./UseBooleanToggle";

describe("UseBooleanToggle", () => {
  it("Returns onTrue value on true", () => {
    const { result } = renderHook(() => useBooleanToggle(true, false, true));

    expect(result.current).toBeTruthy();
  });

  it("Returns onFalse value on false", () => {
    const { result } = renderHook(() => useBooleanToggle(true, false, false));

    expect(result.current).toBeFalsy();
  });
});
