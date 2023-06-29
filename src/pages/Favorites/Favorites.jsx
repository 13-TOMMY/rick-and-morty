import React, {useContext} from 'react'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import './Favorites.css'


function Favorites() {

  //now change to global state
  //NOTE { } NOT []
  const {favorites} = useContext(FavoritesContext)

  return (
    <div className="favorites-container">
        <h1>My Favorite Characters</h1>
        <div className="favorite-characters">
            {
                favorites.length > 0?
                favorites.map(item=><CharacterCard 
                    key={item.id} character={item} />)
                :
                <p>No favorite characters selected yet</p>
            }
        </div>
    </div>
  )
}

export default Favorites