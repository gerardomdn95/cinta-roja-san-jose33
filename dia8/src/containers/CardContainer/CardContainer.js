import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';

export default class CardContainer extends Component {

    state = {
        movies: []
    }

    getMovies = () => {
        axios.get("https://crud-sanjose.herokuapp.com/api/v1/movie")
            .then((movies) => this.setState({movies: movies.data}))
            .catch((error) => alert("Error obteninedo películas"))
    }

    constructor(props) {
        super(props);
        this.getMovies();
    }

    componentWillMount() {
        this.getMovies();
    }

    render() {
        const { movies } = this.state;
        return (
            <div>
                <div className="container">
                    <h1>Mi primera aplicación de React</h1>
                    <Link to="/addMovie">
                        <button className="btn btn-primary">Agregar película</button>
                    </Link>
                    { movies.map(movie => (
                        <Card movie={movie} key={movie._id} />
                    ))}
                </div>
            </div>
        )
    }
}

