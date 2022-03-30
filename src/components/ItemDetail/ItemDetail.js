import React from 'react'

//css:
import './ItemDetail.css';

//componentes:
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemDetail = ({product}) => {
    const {image, title, size, price, stock} = product;
    
    return(
        
        <div className="containerProductDetail">
            <h3>{title}</h3>
            <div>
                {<img className='imgProductDetail' src={`/img/${image}`} alt={image} />}
                <p>Talle: {size}</p>
                <p>Precio: $ {price}</p>
                <p>Stock Disponible: {stock} unidades</p>
            </div>
            <Button id="addToCart" size="small" variant="outlined" color="success" startIcon={<AddShoppingCartIcon />}>Agregar</Button>
        </div>
    )
}

export default ItemDetail;
