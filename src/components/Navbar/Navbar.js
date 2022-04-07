import * as React from 'react';
import {Link} from 'react-router-dom'

//MUI:
import Button from '@mui/material/Button';

//css:
import './Navbar.css';

//Componentes:
import CartWidgets from '../../components/CartWidgets/CartWidgets'
import MenuCategoriasNavbar from './MenuCategoriasNavbar'

// const color = green[500];

function Navbar(){
    return(
        <header className='main-header'>
            <div className='container-logo'>
            <Link to='/'><img src='/img/leport-logo.png' className='img-header' alt='logo' /></Link>
            </div>
            <ul className='navbar'>
                <li><Link className='btnNavbar' to='/'><Button variant="text" color="success">Home</Button></Link></li>
                <li>
                    <MenuCategoriasNavbar />
                </li>
                <li><Link className='btnNavbar' to='/about'><Button variant="text" color="success">Nosotros</Button></Link></li>
                <li><Link className='btnNavbar' to='/contact'><Button variant="text" color="success">Contacto</Button></Link></li>
                <li><CartWidgets /></li>
            </ul>
        </header>
    )
}

export default Navbar