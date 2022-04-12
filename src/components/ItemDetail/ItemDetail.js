import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'

//css:
import './ItemDetail.css';

//MUI:
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

//componentes:
import ItemCount from '../ItemCount/ItemCount';

//context:
import CartContext from '../../context/CartContext';

const ItemDetail = ({product}, initial) => {
    const {image, title, size, price, stock, id} = product;
    const [count, setCount] = useState(0)
    const {cart, addProductToCart} = useContext(CartContext) //se debe aclarar que contexto se usa

    const onAdd = (qty)=>{
        setCount(count + qty)
        addProductToCart(product, qty)
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return(
        <Container>
            <div className="containerProductDetail">
                <Box sx={{ flexGrow: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Item>
                                <img className='imgProductDetail' src={`/img/${image}`} alt={image} />
                            </Item>
                        </Grid>
                            <Grid item xs={4}>
                                <Item>
                                    <h3>{title}</h3>
                                    <div>
                                        <p>Talle: {size}</p>
                                        <p>Precio: $ {price}</p>
                                        <p>Stock: {stock} unidades</p>
                                    </div>
                                    
                                    <ItemCount product={product} stock={stock} initial={initial} onAdd={onAdd}/>
                                </Item>
                                <Item>
                                    <Link className='btnNavbar' to='/cart'>
                                        <Button id="addToCart" size="small" variant="outlined" color="success" startIcon={<ShoppingBasketIcon />}>Finalizar Compra</Button>
                                    </Link>
                                </Item>
                            </Grid>
                    </Grid>
                </Box>
            </div>
        </Container>
    )
}

export default ItemDetail;
