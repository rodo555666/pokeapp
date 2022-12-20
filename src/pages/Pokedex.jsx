import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Pokecard from '../componentes/pokedex/Pokecard';
import Pagination from '../componentes/pokedex/Pagination';
import { useNavigate } from 'react-router-dom';
import './individual.css'


const Pokedex = () => {

   const navigate =useNavigate()
    const {trainer} = useSelector(state => state)
     const [pokemons, setpokemons] = useState()
     const [types, settypes] = useState()
     const [stype, setstype] = useState("all pokemons")




    useEffect(() => {

    if (stype !== "all pokemons") {
      axios.get(stype)
      .then(res=> setpokemons(res?.data.pokemon.map(e => e.pokemon)))       
      .catch(err=> console.log(err))
    } else { 

    
        const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'      
        axios.get(url)
        .then(res=> setpokemons(res?.data.results))       
        .catch(err=> console.log(err))}
    }, [stype])

  const submit =  e => {
  e.preventDefault()
 const input = e.target.busqueda.value.trim().toLowerCase()
   navigate(`/pokedex/${input}`)
  }

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/type'      
    axios.get(url)
    .then(res=> settypes(res?.data.results))       
    .catch(err=> console.log(err))
}, [])

 const typechange =  e => {
  e.preventDefault()
 setstype(e.target.value) 
   setpage(1)
  }

const [page, setpage] = useState(1)
const [pokeperpage, setpokeperpage] = useState(8)
let initial = (page -1) * pokeperpage
let final = page * pokeperpage
const maxpage = pokemons && Math.ceil( pokemons.lenght / pokeperpage)

  return (
    <div>
    <h2 className='bienvenida'> <span className='rojo'> Welcome {trainer}</span>, here you can find your favorite pokemon</h2>
    <form className='form' onSubmit={submit}>
      <input className='buscar' id="busqueda" type="text" />
      <button className='btnbus'>buscar</button>
    </form>
    <select className='select' onChange={typechange} >
      <option value="all pokemons"> type </option>
     {
      types?.map(type => ( <option key={type.url} value={type.url}>{type.name}</option> ))
     }
    </select>
    <Pagination page={page} pokemons={pokemons} maxpage={maxpage} setpage={setpage}/>
    <div className='poke-container'>
     { 
     pokemons?.slice(initial, final).map(poke => (
         <Pokecard
         key={poke.url} 
        url={poke.url}
         />
        ))
        }
    </div>
    </div>
    
  )
}

export default Pokedex