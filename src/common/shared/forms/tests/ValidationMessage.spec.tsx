import { render, screen } from "@testing-library/react";
import ValidationMessage from "../base/ValidationMessage";
import ValueDefaults from "../../../../utilities/defaults/ValueDefaults";

describe("ValidationMessage", () => {
  it("Valid input, has correct classes", () => {
    render(<ValidationMessage validInput validationMessage={ValueDefaults.String} />);

    expect(screen.getByText(/valid/iu)).toHaveClass("is-invisible");
  });

  it("Invalid input, has correct classes", () => {
    render(<ValidationMessage validInput={false} validationMessage="Invalid Input." />);

    expect(screen.getByText(/Invalid Input./iu)).toBeInTheDocument();
    expect(screen.getByText(/Invalid Input./iu)).toHaveClass("is-danger");
  });
});
