import React, {useContext} from 'react'

//MUI:
import { MenuItem } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container'

//css
import './Cart.css'

//Context
import CartContext from '../../context/CartContext';

const Cart = () => {
    const {cart} = useContext(CartContext)
      return (
        <Container>
            <h1>Carrito</h1>
            {(cart.length > 0)?
            cart.map( (product)=>{
                return (
                    <MenuItem key={product.id}>
                        <div>
                            <img className="cartProductImage" src={`./img/${product.image}`} alt={product.image} />
                        </div>
                        <div>
                            <p>{product.title}</p>
                            <span>Valor Unitario: ${product.price}</span>
                            <p>Cantidad: {product.qty}</p>
                        </div>
                        <div>
                            <DeleteIcon />
                        </div>
                    </MenuItem>
                )
            }) 
            :
            <div>
                No hay items en el carrito
            </div>
            }
        </Container>
      )
  }
  
  export default Cart


