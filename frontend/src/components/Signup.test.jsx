import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Signup from "./Signup";

// Correctly mock `useNavigate`
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Signup Component", () => {
  test("renders Signup heading", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
    expect(screen.getByText("Signup")).toBeInTheDocument();
  });

  test("allows user to input values", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const nameInput = screen.getByPlaceholderText("Username");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    expect(nameInput.value).toBe("John Doe");
  });

  test("shows error when passwords do not match", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const passwordInput = screen.getByPlaceholderText("Password");
    const confirmPasswordInput = screen.getByPlaceholderText("Confirm Password");
    const registerButton = screen.getByText("Register");

    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "password456" } });
    fireEvent.click(registerButton);

    expect(screen.getByText("Passwords do not match!")).toBeInTheDocument();
  });

  test("redirects to login page on successful signup", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const nameInput = screen.getByPlaceholderText("Username");
    const emailInput = screen.getByPlaceholderText("Email");
    const contactInput = screen.getByPlaceholderText("Contact");
    const passwordInput = screen.getByPlaceholderText("Password");
    const confirmPasswordInput = screen.getByPlaceholderText("Confirm Password");
    const registerButton = screen.getByText("Register");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(contactInput, { target: { value: "1234567890" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "password123" } });

    fireEvent.click(registerButton);

    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith("/login"));
  });
});
