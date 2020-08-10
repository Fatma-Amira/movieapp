import React,{useState} from 'react'
import {FaStar} from 'react-icons/fa'
import '../css_component/StarRating.css'

export default function StarRating({note}) {
    const [Rating, setRating] = useState(note)
    const [Hover, setHover] = useState(null)
    return (
        <div>
            
            {
            [...Array(5)].map(
                (star,i)=>{
                const RatingValue = i+1 ;
                return(
                <label>
                <input className="input_rating"
                 type="radio" 
                value={RatingValue} 
            //    onClick={()=>{setRating(RatingValue)}} 
                 />
               <FaStar
                className="Star"
                size={36} 
                onMouseEnter={()=>setHover(RatingValue)} 
                onMouseLeave={()=>setHover(null)}
                color={RatingValue <= (Hover ||Rating) ? "#ffc107" : "#e4e5e9"} 
                />
               </label>)
            })
             
             }
           
        </div>
    )
}
