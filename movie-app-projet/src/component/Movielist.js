import React,{useState} from 'react'
import Card from './Moviecard'
import '../css_component/Movielist.css'
import PropTypes from 'prop-types';

export default function Movielist({newlistmovie}) {
  
 

    
    return (
        <ul className="list_movie">

            {newlistmovie.map((Movie)=>(<Card  key={Movie.id} poster={Movie.poster} name={Movie.name} annee={Movie.annee} note={Movie.note} />))}
                </ul>
    )
}
