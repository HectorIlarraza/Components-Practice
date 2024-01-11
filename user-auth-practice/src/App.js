import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/login";
import UserForm from "./Components/UserForm/userForm";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/form" element={<UserForm />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
