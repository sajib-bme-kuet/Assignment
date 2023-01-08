import { Route, Routes } from "react-router";
import "./App.css";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import UserDetailsEdit from "./pages/UserDetailsEdit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/details/:id" element={<UserDetails />} />
        <Route exact path="/edit/:id" element={<UserDetailsEdit />} />
      </Routes>
    </div>
  );
}

export default App;
