import React,{useState} from 'react';
import './App.css';
import Movielist from './component/Movielist'
import StarRatingSearch from './component/StarRatingSearch';
import Filter from './component/Filter.js';
import Add from './component/Add_movie'

function App() {
  
  //Data 
  const [Movies, setMovies] = useState([{id:Math.random(),note:1,poster: "https://media.senscritique.com/media/000018476719/150/Avengers_Endgame.jpg", name:"Avengers : Endgame",annee:2019},
  {id:Math.random(),note:2,poster: "https://media.senscritique.com/media/000019517745/160/Dune.jpg", name:"Dune",annee:2020},
  {id:Math.random(),note:5,poster: "https://media.senscritique.com/media/000018727645/150/Joker.jpg", name:"Joker",annee:2019}]);
  
  //add movie 
  
      const addmovie = (poster,name,annee,note)=> {
        if ((name === "" )|| (poster === "" ) || (annee === "" )){
          alert("can't add empty movie")
        } else{
        const newMovie = [...Movies, {id : Math.random(), note , poster , name ,  annee}];
        setMovies(newMovie);
    }
    
  }

  // search
  const [search, setsearch] = useState("")
  const [Hover, setHover] = useState(null)
  const [filterdisplay, setfilterdisplay] = useState(Movies)
  const newlistmovie=Movies.filter(movie=>(movie.name.toLowerCase().includes(search.toLowerCase())&&(movie.note>=Hover)) ) 


  return (
    <div className="App">
      <header className ="entete"> 
    <StarRatingSearch 
      Movies={Movies} 
       Hover={Hover} 
       setHover={setHover}
       />
      <Filter 
      setsearch={setsearch}
       search={search}
        />
      </header>
      <main className ="container">
     <Add
      addmovie={addmovie}
      />
    <Movielist 
    
      newlistmovie={newlistmovie}  
       />
    </main>
    </div>
  );
}

export default App;
