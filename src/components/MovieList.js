import React from 'react';

const MovieList=(props)=>{
    const favouriteComponent = props.favouriteComponent;
    return(
        <>
            {props.movies.map((movie, index)=>(
                <div className="image-container d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt ='movie'></img>
                    <div className='overlay d-flex align-items-center justify-conten'>
                    </div>
                    <favouriteComponent/>
                </div>
            ))}
        </>
    );
};

export default MovieList;