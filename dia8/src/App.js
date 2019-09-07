import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import CardContainer from './containers/CardContainer/CardContainer';
import FormContainer from './containers/FormContainer/FormContainer';

export default function App() {
  return (
    <div>
      <Navbar/>
      
      <BrowserRouter>
        <Route exact path="/" component={CardContainer} />
        <Route exact path="/addMovie" component={FormContainer} />
      </BrowserRouter>

      <Footer/>
    </div>
  )
}
