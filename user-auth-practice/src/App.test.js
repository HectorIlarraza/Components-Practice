import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("can receive a new user and show it on a list", async () => {
  render(
    <MemoryRouter initialEntries={["/form"]}>
      <App />
    </MemoryRouter>
  );

  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });
  const button = screen.getByRole('button');

  await user.click(nameInput);
  await user.keyboard("jane");
  await user.click(emailInput);
  await user.keyboard("jane@gmail.com");

  await user.click(button);

  const name = screen.getByRole("cell", { name: "jane"});
  const email = screen.getByRole("cell", { name: "jane@gmail.com"});

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
