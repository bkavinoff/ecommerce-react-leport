import React, {useContext} from 'react';
import {Link} from 'react-router-dom'

//MUI:
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';

//context:
import CartContext from '../../context/CartContext';
import ThemeContext from '../../context/ThemeContext';

export default function IconButtons() {
  const {cart, addProductToCart} = useContext(CartContext)
  const {lightTheme} = useContext(ThemeContext)

  const StyledBadgeLight = styled(Badge)({
    "& .MuiBadge-badge": {
      color: "#66bb6a",
      backgroundColor: "#c8e6c9"
    }
  });

  const StyledBadgeDark = styled(Badge)({
    "& .MuiBadge-badge": {
      color: "white",
      backgroundColor: "#66bb6a"
    }
  });


  return (
    
      <Link className='btnNavbar' to='/cart'>
        <IconButton className="linkNavbar" aria-label="Agregar al Carrito">
          {lightTheme ? 
            <StyledBadgeLight className="badgeCartIcon"
            badgeContent={cart.length}>
              <ShoppingCartIcon />
            </StyledBadgeLight>
          :
            <StyledBadgeDark className="badgeCartIcon"
            badgeContent={cart.length}>
              <ShoppingCartIcon />
            </StyledBadgeDark>
          }
        </IconButton>
      </Link>
  );
}