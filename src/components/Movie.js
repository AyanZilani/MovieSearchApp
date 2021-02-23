import React from 'react';



const Img_API= 'https://image.tmdb.org/t/p/original';

const setPopularity= (pop) =>{
    if(pop <= 10){
        return 'red'
    } else if(pop<=100){
        return 'yellow'
    } else{
        return 'orange'
    }
        
}






export const Movie = ({ title, poster_path, overview, 
    popularity,release_date,original_language}) => 
    <div className="movie">
        <img src={(poster_path ? (Img_API+poster_path) : 'https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')} alt= {title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={
                `tag ${setPopularity(popularity)}`
                }>
                {popularity}</span>
                <div className="movie-overview"><h2>Synopsis</h2>
                <p>{overview}</p>
                <h2>Release date</h2>
                <p>{release_date}</p>
                <h2>Original Language</h2>
                <p>{original_language}</p>
                </div>
                
       
        </div>
        {}
        
        
      
    </div>
    


export default Movie;