
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/Trainer.slice'
import './home.css'
const Home = () => {

  const dispach = useDispatch()
  const navigate = useNavigate()

const handleSubmit = e => { 
  e.preventDefault()
  dispach(setTrainerGlobal(e.target.string.value.trim()))
  e.target.string.value = '' // vacia el input despues de escribir
  navigate('/pokedex')

}


    
  return (
    <><div className='hom'>
      <h2 className='saludo'>¡hola entrenador!</h2>
      <p>escribe tu nombre</p>
    </div>
    <form  onSubmit={handleSubmit}>
      <input className='name' id='string' type="text" />
      <button className='btnhome'>start</button>
    </form></>
  )
}

export default Home