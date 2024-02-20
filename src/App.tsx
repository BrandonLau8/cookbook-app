
import {Routes, Route, Link} from "react-router-dom"
import './App.css'
import { Box, Button, CssBaseline } from '@mui/material'

import AllFoodComponent from "./components/AllFoodComponent"
import NewFoodComponent from "./components/NewFoodComponent"
import FoodProfile from "./components/FoodProfile"


function App() {
  

  return (
    <>
      <Box>
        <CssBaseline />
     

      <Routes>
        <Route path='/' element={<AllFoodComponent/>}/>
        <Route path='/:id' element={<FoodProfile/>}/>
        <Route path="/:id?/createfood" element={<NewFoodComponent/>}/>
      </Routes>
      </Box>
    </>
  )
}

export default App
