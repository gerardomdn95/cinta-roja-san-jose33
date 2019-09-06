import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
    state = {
        company: "Dev.f",
        year: new Date().getFullYear(),
    }
    render() {
        return (
            <div>
                <div className="footer">
                    <p>{this.state.company}</p>
                    <p>Todos los derechos reservados {this.state.year}</p>
                </div>
            </div>
        )
    }
}
