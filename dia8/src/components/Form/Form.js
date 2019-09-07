import React, { Component } from 'react'

export default class Form extends Component {

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
                        <input type="text" className="form-control" id="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Año</label>
                        <input type="number" className="form-control" id="year" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descripción</label>
                        <input type="text" className="form-control" id="description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Liga portada</label>
                        <input type="text" className="form-control" id="image" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="liga">Género</label>
                        <select className="custom-select" id="theme">
                            <option value="drama">drama</option>
                            <option value="acción">acción</option>
                            <option value="comedia">comedia</option>
                            <option value="terror">terror</option>
                            <option value="infantil">infantil</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="director">Director</label>
                        <input type="text" className="form-control" id="director" />
                    </div>
                    <div className="btn btn-primary">Submit</div>
                </form>
            </div>
        )
    }
}
