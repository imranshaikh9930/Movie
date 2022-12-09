import React from 'react';

const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                    <img src={movie.Poster} alt='movie'></img>
                    <div className='overlay' onClick={()=>props.handleClick(movie)}>
                        {/* <div>{props.favorites}</div> */}
                            <FavoriteComponent/>

                      
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;