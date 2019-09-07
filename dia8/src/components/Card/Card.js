import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const { movie } = this.props;
        return (
            <div className="col-sm-4">
                <div className="card">
                    <img className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">Año: </p>
                        <p className="card-text">Descipción: </p>
                        <p className="card-text">Género:</p>
                        <p className="card-text">Director: </p>
                        <button className="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>
        )
    }
}
