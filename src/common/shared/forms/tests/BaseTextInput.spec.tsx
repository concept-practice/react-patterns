import { render, screen } from "@testing-library/react";
import BaseTextInputWrapper from "./BaseTextInputWrapper";
import userEvent from "@testing-library/user-event";

describe("BaseTextInput", () => {
  it("Handles Change Events", async () => {
    render(<BaseTextInputWrapper />);

    const user = userEvent.setup();

    await user.click(screen.getByLabelText("text"));

    await user.keyboard("Hello");

    expect(await screen.findByText(/Hello/iu)).toBeInTheDocument();
  });
});
