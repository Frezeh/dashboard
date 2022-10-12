import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import "./global.scss"
import { useContext } from "react";
import DashboardLayout from "./components/DashboardLayout/dashboardLayout";
import Login from "./pages/Login/login";
import User from "./pages/Dashboard/pages/Users/user";
import { UsersContext } from "./context/userContext";
import UserDetails from "./pages/Dashboard/pages/UserDetails/userDetails";

function App(): JSX.Element {
  const { isAuthenticated } = useContext(UsersContext);

  const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    return isAuthenticated ? children : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <DashboardLayout>
                <Routes>
                  <Route path="/users" element={<User />} />
                  <Route path="/user/:id" element={<UserDetails />} />
                </Routes>
              </DashboardLayout>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
