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
import CartPage from './components/Pages/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

//context:
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              
              <Route path='/product/:id' element={<ProductDetail/>} />
              <Route path='/contact' element={<ContactPage/>} />
              <Route path='/about' element={<AboutUsPage/>} />
              <Route path='/cart' element={<CartPage/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/' element={<HomePage/>} />  
              <Route path='*' element={<NotFoundPage/>} />  
              
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;
