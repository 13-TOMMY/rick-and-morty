import React from 'react'
import "./CharacterDetails.css"
import {useParams} from 'react-router-dom'
import axios from 'axios'

function CharacterDetails() {
   //this page will show details for a specific character
   //which character
   //the id will be passed in the url
   //retrive the id from the params
   const {characterId} = useParams()
   const[character, setCharacter] = react.useState('')
   //https://rickandmortyapi.com/api/character/9
   React.useEffect( () => {
      axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then(res =>{
         console.log(res.data)
         setCharacter(res.data)
      })
      .cath(err => console.log(err))
   }, [])

  return (
    <div className='details-container'>
      <img src="character?.image" alt="image of character" />
      <div className="container-info">
         <p>Name:{character?.name}</p>
         <p>Gender:{character?.gender}</p>
         <p>Location:{character?.location?.name}</p>
         <p>Species:{character?.species}</p>
      </div>
      </div>
  )
}

export default CharacterDetails