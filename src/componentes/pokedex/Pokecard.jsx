import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import './pokeCard.css'

const Pokecard = ({url}) => {

    const [pokemon, setpokemon] = useState()

    useEffect(() => {     
        axios.get(url)
        .then(res=> setpokemon(res?.data))       
        .catch(err=> console.log(err))
    }, [])

  const navigate =useNavigate()


    const click =()=> { 
       navigate(`/pokedex/${pokemon.id}`)
    }


  return (
   <article className='card' onClick={click}>
    <header className='header' >
        <div className={`colorA bg-${pokemon?.types[0].type.name}`} ></div>
        <img className='img'  src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon" />
    </header>
    <section >
        <h3 className='nombre'>{pokemon?.name}</h3>
        <ul className='typeInfo'>
            {pokemon?.types.map(type =>(
                <li className='type' key={type.type.name}>{type.type.name} </li>
            ))}
        </ul>
    </section>
    <footer className='statfooter'>
        <ul className='stats'>
            {
                pokemon?.stats.map(stat=>(
                    <li className='stat' key={stat.stat.name}>
                        <span className='label' >{stat.stat.name}</span>
                    <span className='number' >{stat.base_stat}</span>
                    </li>
                    
                ))
            }
        </ul>
    </footer>
   </article>
  )
}

export default Pokecard