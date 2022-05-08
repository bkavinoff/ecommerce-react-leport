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
import { green } from '@mui/material/colors';


//componentes:
import ItemCount from '../ItemCount/ItemCount';

//context:
import CartContext from '../../context/CartContext';
import ThemeContext from '../../context/ThemeContext'

const ItemDetail = ({product}, initial) => {
    const {image, title, size, price, stock, id} = product;
    const {addProductToCart} = useContext(CartContext)
    const {lightTheme} = useContext(ThemeContext)

    const onAdd = (qty)=>{
        addProductToCart(product, qty)
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
                                        <ColorButton id="addToCart" size="small" variant="outlined" color="success" startIcon={<ShoppingBasketIcon />}>Ver Carrito</ColorButton>
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
