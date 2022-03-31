import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//css:
import './App.css';

//Componentes:
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/Pages/Home';
import ProductDetail from './components/Pages/ProductDetail';
import ContactPage from './components/Pages/Contact';
import NotFoundPage from './components/Pages/NotFound';
import AboutUsPage from './components/Pages/AboutUs';
import CheckoutPage from './components/Pages/Checkout';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path='/product/:id' element={<ProductDetail/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/about' element={<AboutUsPage/>} />
          <Route path='/checkout' element={<CheckoutPage/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/' element={<HomePage/>} />  
          <Route path='*' element={<NotFoundPage/>} />  
          
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
