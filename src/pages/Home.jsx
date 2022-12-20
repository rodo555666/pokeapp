
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/Trainer.slice'

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
    <><div>Home</div>
    <form onSubmit={handleSubmit}>
      <input id='string' type="text" />
      <button>start</button>
    </form></>
  )
}

export default Home