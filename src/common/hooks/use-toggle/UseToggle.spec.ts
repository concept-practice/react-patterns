import { act, renderHook } from "@testing-library/react";
import useToggle from "./UseToggle";

describe("useToggle", () => {
  it("uses initial value by default", () => {
    const { result } = renderHook(() => useToggle("First", "Second"));

    const [value] = result.current;

    expect(value).toEqual("First");
  });

  it("Toggles to alternative correctly", () => {
    const { result } = renderHook(() => useToggle("First", "Second"));

    act(() => {
      const [, toggle] = result.current;

      toggle();
    });

    const [value] = result.current;

    expect(value).toEqual("Second");
  });
});
