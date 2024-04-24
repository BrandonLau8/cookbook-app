import { Routes, Route, Link, Navigate } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import AllFoodComponent from "./components/AllFoodComponent";
import NewFoodComponent from "./components/NewFoodComponent";
import FoodProfile from "./components/FoodProfile";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import User from "./components/User";
import Admin from "./components/Admin";
import RegisterPage from "./components/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuthContext } from "./context/AuthProvider";

function App() {
  
  
  return (
    <>
      <Box>
        <CssBaseline />
        <Navbar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<AllFoodComponent />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Private Routes */}
          <Route path="/:id" element={<FoodProfile />} />
          <Route path="/:id?/createfood" element={<NewFoodComponent />} />
          {/* <Route
            path="/user"
            element={
              status ? <User /> : <Navigate to="/login" replace />
            }
          /> */}
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
