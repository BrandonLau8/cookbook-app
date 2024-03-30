import { Routes, Route, Link } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import AllFoodComponent from "./components/AllFoodComponent";
import NewFoodComponent from "./components/NewFoodComponent";
import FoodProfile from "./components/FoodProfile";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <Box>
        <CssBaseline />
        <Navbar />

        <Routes>
          <Route path="/" element={<AllFoodComponent />} />
          <Route path="/:id" element={<FoodProfile />} />
          <Route path="/:id?/createfood" element={<NewFoodComponent />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
