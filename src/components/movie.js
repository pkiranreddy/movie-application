import React from 'react';

const Movie=(props)=>{
    return(
           <div className="col s12 m6 l3">
               <div className="card">
                   <div className="card-image waves-effect waves-block waves-light">
                        {
                            props.title == null ? <img src="" alt="cardnumber" /> : <img src={`http://image.tmdb.org/t/p/w185${props.title}`} alt="" style ={{width : '100%' , height : 360}}/>
                     }
                   </div>
                   <div className='card-content'>
                       <p><a href='#'>view details</a></p>
                   </div>
               </div>
               
             
               
           </div>
    )
}

export default Movie;