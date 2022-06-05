import { render, screen } from "@testing-library/react";
import ComponentBooleanToggle from "./ComponentBooleanToggle";

describe("ComponentBooleanToggle", () => {
  it("True value, returns correct component", () => {
    render(<ComponentBooleanToggle boolValue falseValue={<>False</>} trueValue={<>True</>} />);

    expect(screen.getByText(/True/iu)).toBeInTheDocument();
  });

  it("False value, returns correct component", () => {
    render(<ComponentBooleanToggle boolValue={false} falseValue={<>False</>} trueValue={<>True</>} />);

    expect(screen.getByText(/False/iu)).toBeInTheDocument();
  });
});
