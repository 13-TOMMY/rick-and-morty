import React from 'react'
import './CharacterDetails.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function CharacterDetails() {
    //this page will show details for a specific character
    //which character?
    //the id will be passsed in the url
    //retrieve the id from the params
    const {characterId} = useParams()

    //create state to hold data for this character
    const [character, setCharacter] = React.useState('')

    //I need to show details for this character when the page loads
    //https://rickandmortyapi.com/api/character/5

    React.useEffect(
        ()=>{
            //console.log(characterId)
            //make api call to get data
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(res =>{
                console.log(res.data)
                //I have the data, where do I store it?
                setCharacter(res.data)

            })
            .catch(err => console.log(err))


        }, [] //run once when the page loads
    )

  return (
    <div className="details-container">
        <img src={character?.image} />
        <div className="container-info">
            <p>Name: {character?.name}</p>
            <p>Gender: {character?.gender}</p>
            <p>Location: {character?.location?.name}</p>
            <p>Species: {character?.species}</p>
        </div>
    </div>
  )
}

export default CharacterDetails