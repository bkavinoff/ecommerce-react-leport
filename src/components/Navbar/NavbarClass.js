import React from 'react'
import Button from '@mui/material/Button';

class NavBarClass extends React.Component{
    render(){
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
                </ul>
            </header>
    
        )
    }
}

export default NavBarClass