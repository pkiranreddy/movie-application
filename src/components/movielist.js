import React from 'react';
import Movie from './movie';

const Movielist=(props)=>{
    return(

        <div className="container">
            <div className="row"> 
            <div className="col s12">
            {props.movies.map((movie,i)=>{
              return(
                  <Movie key={i} title={movie.poster_path}/>
              )
            })}
            </div>
            </div>
            
        
        </div>
    )
}

export default Movielist;