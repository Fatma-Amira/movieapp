import React from 'react';
import '../css_component/Moviecard.css';
import StarRating from './StarRating'
export default function Moviecard({poster,name,annee,note}) {
    return (
 <li className="Card">
 <StarRating note={note}/>
  <img className="img_movie" src={poster} alt="erreur de chargement"></img>
  <div className="card-contaier" >
  <span>{name}</span>
  <span>{annee}</span> 
  </div>
        </li>
    )
}
