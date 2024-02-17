import { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom"
import './App.css'
import { Box, Button, CssBaseline } from '@mui/material'

import ListFoodTemplate from './components/ListFoodComponent'
import { addFoods } from './services/FoodService'

function App() {
  

  return (
    <>
      <Box>
        <CssBaseline />
        <Button onClick={addFoods} variant="contained">Add Food</Button>
      <ListFoodTemplate />

      <Routes>
        
      </Routes>
      </Box>
    </>
  )
}

export default App
