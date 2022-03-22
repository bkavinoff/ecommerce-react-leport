import * as React from 'react';
import Button from '@mui/material/Button';
import CartWidgets from '../../components/CartWidgets/CartWidgets'

// import { green } from '@mui/material/colors';
// const color = green[500];

function Navbar(){
    return(
        <header className='main-header'>
            <div className='container-logo'>
                <img src='/img/leport-logo.png' className='img-header' alt='logo' />
            </div>
            <ul className='navbar'>
                <li><Button variant="text" color="success">Home</Button></li>
                <li><Button variant="text" color="success">Productos</Button></li>
                <li><Button variant="text" color="success">Nosotros</Button></li>
                <li><Button variant="text" color="success">Contacto</Button></li>
                <li><CartWidgets /></li>
            </ul>
        </header>
    )
}

export default Navbar