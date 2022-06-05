import { render, screen } from "@testing-library/react";
import BaseTextInput from "../base/BaseTextInput";
import BaseTextInputWrapper from "./BaseTextInputWrapper";
import useInput from "../hooks/UseInput";
import userEvent from "@testing-library/user-event";

describe("BaseTextInput", () => {
  const Component: React.FC = () => {
    return <BaseTextInput labelText="text" useInput={useInput()} />;
  };

  it("Handles Change Events", async () => {
    render(<Component />);

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
