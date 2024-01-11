import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import user from "@testing-library/user-event";
import UserForm from "./userForm";

test('it shows two inputs and a button', () => {
    // render the component
    render(<UserForm />);

    // Manipulate the component or find an element in it 
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    
    // Assertion - make sure the component is doing
    // what we expect it to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();

});

test('it calls onUserAdd when the form is submitted', async () => {
    // NOT THE BEST IMPLEMENTATION
    // const argList = [];
    // const callBack = (...args) => {
    //     argList.push(args);
    // };
    // render(<UserForm onUserAdd={callBack} />);

    // Modern implementation using Mock function
    const mock = jest.fn();

    // Try to render my component
    render(<UserForm onUserAdd={mock} />);

    // Find the two inputs
    const nameInput = screen.getByRole("textbox", {
        name: /name/i
    });

    const emailInput = screen.getByRole("textbox", {
        name: /email/i
    });

    // Simulate typing a name
    await user.click(nameInput);
    await user.keyboard("hector")

    // Simulate typing a email
    await user.click(emailInput);
    await user.keyboard("hector@gmail.com")

    // Find the button
    const button = screen.getByRole('button');

    // Simulate clicking the button
    await user.click(button);

    // Assertion - to make sure 'onUserAdd' gets called with email/name
    // expect(argList).toHaveLength(1);
    // expect(argList[0][0]).toEqual({ name: 'hector', email: 'hector@gmail.com' });
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({ name: 'hector', email: 'hector@gmail.com' });

});

test('empties the two inputs when form is submitted', async () => {
    render(<UserForm onUserAdd={() => {}} />);

    const nameInput = screen.getByRole("textbox", {name: /name/i});
    const emailInput = screen.getByRole("textbox", {name: /email/i});
    const button = screen.getByRole("button");

    await user.click(nameInput);
    await user.keyboard("jane");
    await user.click(emailInput);
    await user.keyboard("jane@gmail.com");

    await user.click(button);

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
});