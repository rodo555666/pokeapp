import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoutes from './componentes/ProtectedRoutes'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexInfo from './pages/PokedexInfo'


function App() {
 const trainer = useSelector(state => state.trainer)
 
  return (
    <div className="App">
      <header className='logo'><img src="./image 12.png" alt="img" /> 
      </header>
      
      
      
      <Routes> 
        <Route path='/' element={<Home/>}/>

         <Route element={<ProtectedRoutes/>} >
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokedex/:id' element={<PokedexInfo />}/>
         </Route>
      </Routes>
    </div>
  )
}

export default App
