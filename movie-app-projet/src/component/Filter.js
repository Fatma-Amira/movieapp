import React, { useState } from 'react'
import '../css_component/Filter.css'
import Card from './Moviecard'

export default function Filter({setsearch,search}) {
   
    return (
        
        <div>
 <input
  type="search" 
  placeholder="Search for a movie" 
  value={search} 
  onChange={(e)=>{setsearch(e.target.value)}}
   className="Search">
   </input>
        </div>
    )
}
