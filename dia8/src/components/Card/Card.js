import React from 'react';
import axios from 'axios';

export default function Card(props) {

    const deleteMovie = (id) => {
        axios.delete(`https://cinta-roja32.herokuapp.com/api/v1/peliculas/delete?id=${id}`)
            .then((data) => {
                window.location.reload();
            })
            .catch((error) => console.log(error))
    }
    const { movie } = props;

    return (
        <div className="col-sm-4">
        <div className="card">
            <img className="card-img-top" src={movie.image[0]} alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Año: {movie.year}</p>
                <p className="card-text">Descipción: {movie.description}</p>
                <p className="card-text">Género: {movie.theme}</p>
                <p className="card-text">Director: {movie.director}</p>
                <button onClick={() => deleteMovie(movie._id)} className="btn btn-danger">Eliminar</button>
            </div>
        </div>
    </div>
    )
}
