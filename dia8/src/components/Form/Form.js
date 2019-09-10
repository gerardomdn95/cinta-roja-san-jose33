import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {

    handleChange(event) {
        event.preventDefault();
        this.setState({[event.target.id]: event.target.value})
    }

    onSubmit() {
        console.log(this.state);
        axios.post("https://crud-sanjose.herokuapp.com/api/v1/movie", this.state)
            .then(() => alert("Registro exitoso"))
            .catch(error => alert("Ocurrió un error" + error))
    }

    state = {
        title: "Toy Story",
        year: 1995,
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Toy_Story.jpg/220px-Toy_Story.jpg",
        description: "Primer largometraje animado",
        theme: "infantil",
        director: "Desconocido"
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Título</label>
                        <input value={this.state.title} onChange={this.handleChange.bind(this)} type="text" className="form-control" id="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Año</label>
                        <input value={this.state.year} onChange={this.handleChange.bind(this)} type="number" className="form-control" id="year" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descripción</label>
                        <input value={this.state.description} onChange={this.handleChange.bind(this)} type="text" className="form-control" id="description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">URL portada</label>
                        <input value={this.state.image} onChange={this.handleChange.bind(this)} type="text" className="form-control" id="image" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="liga">Género</label>
                        <select value={this.state.theme} onChange={this.handleChange.bind(this)} className="custom-select" id="theme">
                            <option value="drama">drama</option>
                            <option value="acción">acción</option>
                            <option value="comedia">comedia</option>
                            <option value="terror">terror</option>
                            <option value="infantil">infantil</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="director">Director</label>
                        <input value={this.state.director} onChange={this.handleChange.bind(this)} type="text" className="form-control" id="director" />
                    </div>
                    <div onClick={() => this.onSubmit()} className="btn btn-primary">Submit</div>
                </form>
            </div>
        )
    }
}
