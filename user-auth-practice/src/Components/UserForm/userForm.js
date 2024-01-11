import { useState } from "react";
import UserList from "./userList";

const UserForm = ({ onUserAdd: mock }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
    if(mock){
      mock(user);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUserAdd({ name, email });
    
    setEmail("")
    setName("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Enter Email</label>
        <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button>Add User</button>
      <hr />
      {<UserList users={users} />}
    </form>
  );
};

export default UserForm;
