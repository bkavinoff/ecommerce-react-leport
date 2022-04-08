import React, {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom'

//css:
import './Item.css';

//MUI:
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

//Componentes:
import ThemeContext from '../../context/ThemeContext'

export default function Card({data}){
    const {lightTheme} = useContext(ThemeContext)
    const {id, title, size, price, stock, image, categoryId} = data;
    const navigate = useNavigate();
   
    let initial = 0;
    
    //esto se ejecutaría cada vez que se comienza el ciclo de montaje
    useEffect( () => {
        window.addEventListener("scroll",onScrollWindow)
    },[]);
    const [newStock, setStock] = useState(stock)
    // const addStock = () => {
    //     setStock(newStock + 1);
    // }

    // const removeStock = () => {
    //     (newStock-1 < 0) ? setStock(0) : setStock(newStock - 1); data.stock=newStock;
    // }

    const onScrollWindow = () => {
        if (window.scrollY > 100){
            console.log("Scroll mayor a 100")
        }

        return() => {
            window.removeEventListener("scroll",onScrollWindow)
        }
    }

    const changePage = ()=>{
        navigate(`/product/${id}`)
    }
    
    // const handleClick = (e)=>{
    //     e.stopPropagation()
    // }

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
                {/* <div className="containerAddStock" onClick={handleClick}>
                    <Button onClick={removeStock} size="small" variant="outlined" color="success" ><RemoveIcon/> Stock</Button>
                    <Button onClick={addStock} size="small" variant="outlined" color="success" ><AddIcon size="small"/> Stock</Button>
                </div> */}
                <ColorButton variant="outlined" >Ver Detalles</ColorButton>
        </div>
    )
}