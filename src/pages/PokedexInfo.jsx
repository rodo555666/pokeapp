import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';

const pokedexinfo = () => {

const {id} = useParams()

const [pokemonid, setpokemonid] = useState()

useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`      
    axios.get(url)
    .then(res=> setpokemonid(res?.data))       
    .catch(err=> console.log(err))
}, [id])

console.log(pokemonid)
  return (
    <><div className='inf'> 
      <img src={pokemonid?.sprites.other['official-artwork'].front_default} alt="pokemon" />
      <div className='numerop'>#{id}</div>
      <h2 className='nombre'>{pokemonid?.name}</h2>
      <ul className='typeInfo'> 
         {pokemonid?.types.map(type =>(
          <li className='type' key={type.type.name}>{type.type.name} </li>
            ))}</ul>
      <footer >
        <ul className='stats'>
            {
                pokemonid?.stats.map(stat=>(
                    <li className='stat' key={stat.stat.name}>
                     <span className='label'  >{stat.stat.name}</span>
                    <span className='number' >{stat.base_stat}</span>
                    </li>
                    
                ))
            }
        </ul>
    </footer>
      </div></>
  )
}

export default pokedexinfo