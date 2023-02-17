import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/login";

function App() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
