import {useState, useContext} from 'react';
import {Link} from 'react-router-dom'

//MUI:
import Button from '@mui/material/Button';

//css:
import './Navbar.css';

//Componentes:
import CartWidgets from '../../components/CartWidgets/CartWidgets'
import MenuCategoriasNavbar from './MenuCategoriasNavbar'
import ThemeContext from '../../context/ThemeContext'
import ThemeSwitch from '../Navbar/ThemeSwitch'



function Navbar(){
    const {lightTheme} = useContext(ThemeContext)

    console.log("lightTheme: ", lightTheme)
    return(
        <header className={`main-header ${lightTheme ? ' lightMode ':''}`}>
            <div className='container-logo'>
            <Link to='/'><img src='/img/leport-logo.png' className='img-header' alt='logo' /></Link>
            </div>
            <ul className='navbar'>
                <li><Link className='btnNavbar' to='/'><Button className="linkNavbar" variant="text">Home</Button></Link></li>
                <li>
                    <MenuCategoriasNavbar />
                </li>
                <li><Link className='btnNavbar' to='/about'><Button className="linkNavbar" variant="text">Nosotros</Button></Link></li>
                <li><Link className='btnNavbar' to='/contact'><Button className="linkNavbar" variant="text">Contacto</Button></Link></li>
                <li><CartWidgets /></li>
                <li><ThemeSwitch /></li>
            </ul>
            
        </header>
    )
}

export default Navbar