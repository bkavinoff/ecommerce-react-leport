import React, {useState} from 'react'
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

const ItemDetail = ({product}, initial) => {
    const {image, title, size, price, stock} = product;
    const [contador,setContador] = useState(0)
    

    const onAdd=(num)=>{
        setContador(contador + num)
        //alert("Se han agregado " + num + " items al carrito.");
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
            <div>
                <h1>Productos en Carrito: {contador}</h1>
            </div>
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
                                    
                                    <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
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
