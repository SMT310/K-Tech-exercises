import { Route, Routes } from 'react-router-dom';
import "./App.css";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginForm />}
      />
      <Route
        path="/register"
        element={<RegisterForm />}
      />
      <Route
        path="/"
        element={<LoginForm />}
      />
    </Routes>
  );
}

export default App;
