import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import CardContainer from './containers/CardContainer/CardContainer';

export default function App() {
  return (
    <div>
      <Navbar/>
      <h1>Mi primera aplicación de React</h1>
      <CardContainer/>
      <Footer/>
    </div>
  )
}
