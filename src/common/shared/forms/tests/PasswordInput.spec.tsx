import { render, screen } from "@testing-library/react";
import PasswordInput from "../inputs/PasswordInput";
import useInput from "../hooks/UseInput";
import userEvent from "@testing-library/user-event";

describe("PasswordInput", () => {
  const Component: React.FC = () => {
    return <PasswordInput useInput={useInput()} />;
  };

  it("Shows password type by default", async () => {
    render(<Component />);

    const user = userEvent.setup();

    await user.click(screen.getByLabelText("Password"));

    await user.keyboard("Hello");

    expect(await screen.findByLabelText("Password")).toHaveAttribute("type", "password");
  });

  it("Show text when toggled", async () => {
    render(<Component />);

    const user = userEvent.setup();

    await user.click(screen.getByLabelText("Password"));

    await user.keyboard("Hello");

    await user.click(screen.getByRole("button"));

    expect(await screen.findByLabelText("Password")).toHaveAttribute("type", "text");
  });
});
