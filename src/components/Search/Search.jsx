import React from 'react'
import "./Search.css"
import axios, { Axios } from 'axios'

function Search({setCharacters}) {
   //create state to hold users input 
   const [query, setQuery] = React.useState('')
   //https://rickandmortyapi.com/api/character/?name=rick
   const handleSubmit = (e) => {
      //stop the form from refreshing
      console.log("query")
      e.preventDefault()
      //make api call get the matching characters
      axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then(res => {
         console.log(res.data.results)
         setCharacters(res.data.results)
      })
      .catch(err => {console.log(err.response.status)
         if (err.response.status === 404){
            alert("no searches found, try a diffrent name")
         }else{
            console.log(err)
         }
      })
      //clear text box 
      setQuery('')
   }
  return (
   <form className='search-container' onSubmit={handleSubmit}>
   <input type="text" value={query}
   onChange={(e) => setQuery(e.target.value)}   
   placeholder='Search all characters'/>   
   </form>
  )
}

export default Search