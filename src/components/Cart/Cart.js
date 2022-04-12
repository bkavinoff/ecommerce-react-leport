import React, {useContext} from 'react'

//MUI:
import { MenuItem } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container'
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

//css
import './Cart.css'

//Context
import CartContext from '../../context/CartContext';
import ThemeContext from '../../context/ThemeContext'

const Cart = () => {
    const {lightTheme} = useContext(ThemeContext)
    const {cart, removeItemFromCart, clearCart} = useContext(CartContext)

    const handleItemClick = (e) =>{
        e.preventDefault()
        e.stopPropagation()
        //console.log("Click en Item")
    }
    const handleEmptyCart = (e) =>{
        e.stopPropagation()
        //console.log("Click en EmptyCart")
        clearCart()
    }

    const handleDeleteClick = (id) => (e) =>{
        e.stopPropagation()
        //console.log("Click en Delete", id)
        removeItemFromCart(id)
    }


    const getLightColorButton = (theme) => {
        return ({
            color: theme.palette.getContrastText(green[100]),
            backgroundColor: green[100],
            '&:hover': {
              backgroundColor: green[200],
            },
            borderColor: green[400]
        })
    }

    const getDarkColorButton = (theme) => {
        return ({
            color: theme.palette.getContrastText(green[700]),
            backgroundColor: green[700],
            '&:hover': {
              backgroundColor: green[500],
            },
            borderColor: green[900]
        })
    }

    const ColorButton = styled(Button)(({ theme }) => (
        (lightTheme)?getLightColorButton(theme):getDarkColorButton(theme)
    ));

      return (
        <Container>
            <h1>Carrito</h1>
            {(cart.length > 0)?
            cart.map( (product)=>{
                return (
                    <MenuItem key={product.id} onClick={handleItemClick}>
                        <div>
                            <img className="cartProductImage" src={`./img/${product.image}`} alt={product.image} />
                        </div>
                        <div>
                            <p>{product.title}</p>
                            <span>Valor Unitario: ${product.price}</span>
                            <p>Cantidad: {product.qty}</p>
                        </div>
                        <div>
                            <DeleteIcon id={product.id} onClick={handleDeleteClick(product.id)}/>
                        </div>
                    </MenuItem>
                )
            }) 
            :
            <div>
                No hay items en el carrito
            </div>
            }
            <ColorButton onClick={handleEmptyCart} variant="outlined" >Vaciar carrito</ColorButton>
        </Container>
      )
  }
  
  export default Cart


