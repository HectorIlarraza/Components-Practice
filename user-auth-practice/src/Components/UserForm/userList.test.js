import { render, screen, within } from "@testing-library/react";
import '@testing-library/jest-dom';
import UserList from "./userList";

const renderComponent = () => {
    const users = [
        { name: "jane", email: "jane@gmail.com"},
        { name: "hector", email: "hector@gmail.com"},
    ];
    render(<UserList users={users} />);

    return {
        users,
    }
}

test('render one row per user', () => {
    // Render the component
    renderComponent();

    // For the getByRole modern appoarch and data-testid fallback appoarch
    // render(<UserList users={users} />);

    // For querySelector fallback appoarch
    // const { container } = render(<UserList users={users} />);

    // Find all the rows in the table using the getByRole modern appoarch and data-testid fallback appoarch
    const rows = within(screen.getByTestId("users")).getAllByRole("row")

    // Find all the rows in the table using the querySelector fallback appoarch
    // const rows = container.querySelectorAll("tbody tr");

    // Assertion - correct number of rows in the table
    expect(rows).toHaveLength(2)

});

test('render the email and name of each user', () => {
    // Render the component
    const { users } = renderComponent();

    // Find the cells of textcontent of email and name
    for (let user of users) {
        const name = screen.getByRole("cell", { name: user.name });
        const email = screen.getByRole("cell", { name: user.email });
        
        // Assertion - successfully find the elements and ensure we got the email and name
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    };
});