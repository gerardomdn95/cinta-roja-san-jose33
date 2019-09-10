import React from 'react'
import Form from '../../components/Form/Form';
import { Link } from 'react-router-dom';

export default function FormContainer() {
    return (
        <div className="container">
            <h1>Agregar películas</h1>
            <Link to="/">
                <button className="btn btn-primary">Inicio</button>
            </Link>            
            <Form />
        </div>
    )
}
