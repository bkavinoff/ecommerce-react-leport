import * as React from 'react';
import {Link} from 'react-router-dom'

//MUI:
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { green } from '@mui/material/colors';

// const primaryGreen = green[500];
export default function IconButtons() {
    
  return (
    
      <Link className='btnNavbar' to='/cart'>
        <IconButton className="linkNavbar" aria-label="Agregar al Carrito">
          <ShoppingCartIcon />
        </IconButton>
      </Link>
  );
}