
import {Routes, Route, Link} from "react-router-dom"
import './App.css'
import { Box, Button, CssBaseline } from '@mui/material'


import ListFoodComponent from './components/ListFoodComponent'

function App() {
  

  return (
    <>
      <Box>
        <CssBaseline />
     

      <Routes>
        <Route path='/' element={<ListFoodComponent/>}/>
      </Routes>
      </Box>
    </>
  )
}

export default App
