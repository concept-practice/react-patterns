import { render, screen } from "@testing-library/react";
import BaseTextInputWrapper from "./BaseTextInputWrapper";
import userEvent from "@testing-library/user-event";

describe("BaseTextInput", () => {
  it("Handles Change Events", async () => {
    render(<BaseTextInputWrapper labelText="text" required />);

    const user = userEvent.setup();

    await user.click(screen.getByLabelText("text"));

    await user.keyboard("Hello");

    expect(screen.getByLabelText("text")).toHaveValue("Hello");
  });

  it("Invalid input has danger class", async () => {
    render(<BaseTextInputWrapper labelText="text" required />);

    const user = userEvent.setup();

    await user.click(screen.getByLabelText("text"));

    await user.keyboard("1");

    await user.keyboard("{Backspace}");

    expect(screen.getByLabelText("text")).toHaveClass("is-danger");
  });

  it("Valid input has success class", () => {
    render(<BaseTextInputWrapper labelText="text" required />);

    expect(screen.getByLabelText("text")).toHaveClass("is-success");
  });
});
