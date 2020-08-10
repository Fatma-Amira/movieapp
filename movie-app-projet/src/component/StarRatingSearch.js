import React,{useState} from 'react'
import {FaStar} from 'react-icons/fa'

export default function StarRatingSearch({Hover,setHover}) {
    const [Rating, setRating] = useState(null)

    return (
        <div>
            {
            [...Array(5)].map(
                (star,i)=>{
                const RatingValue = i+1 ;
                return(
                <label>
                <input
                 className="input_rating"
                 type="radio" 
                value={RatingValue} 
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
