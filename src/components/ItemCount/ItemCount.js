import React, {useState, useContext} from 'react'

//css:
import './ItemCount.css';

//MUI:
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

//context:
import ThemeContext from '../../context/ThemeContext'

export default function ItemCount({stock, onAdd}) {
    const [itemCount, setItemCount] = useState(0);
    const {lightTheme} = useContext(ThemeContext)

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

    const minusItemCount = () => {
        (itemCount-1 < 0) ? setItemCount(0) : setItemCount(itemCount - 1);
    }

    const addItemCount = () => {
        if (itemCount < stock){
            setItemCount(itemCount + 1);
        }
    }
    const addToCart = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if (itemCount>0){
            onAdd(itemCount);
        }
    }
    const handleClick = (e) =>{
        e.stopPropagation()
    }
    return (
      <div className="containerAddItemToCart"  onClick={handleClick} >
            <ButtonGroup className="btnGroupAddRemove" variant="text" aria-label="text button group" color="success" size="small">
                <Button onClick={minusItemCount} color="success"><RemoveIcon/></Button>
                <Button size="large" className="itemCount" color="success">{itemCount}</Button>
                <Button onClick={addItemCount} color="success" size="small"><AddIcon/></Button>
            </ButtonGroup>
          <ColorButton id="addToCart" className="addToCart" onClick={addToCart} size="small" variant="outlined" color="success" startIcon={<AddShoppingCartIcon />}>Agregar</ColorButton>
    </div>
    )
}