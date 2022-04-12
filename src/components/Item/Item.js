import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom'

//css:
import './Item.css';

//MUI:
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

//Context:
import ThemeContext from '../../context/ThemeContext'

export default function Card({data}){
    const {lightTheme} = useContext(ThemeContext)
    const {id, title, size, price, stock, image, categoryId} = data;
    const navigate = useNavigate();

    const [newStock] = useState(stock)

    const changePage = ()=>{
        navigate(`/product/${id}`)
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

    return(
        <div className="card" onClick={changePage}>
                <div>
                    <img className='imgProductCard' src={`/img/${image}`} alt={image} />
                </div>
                <h2>{title}</h2>
                <p>Talle: {size}</p>
                <p>Precio: $ {price}</p>
                <p>Stock: {newStock}</p>
                <ColorButton variant="outlined" >Ver Detalles</ColorButton>
        </div>
    )
}