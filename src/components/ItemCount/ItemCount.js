import React, {useState} from 'react'

//css:
import './ItemCount.css';

//MUI:
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export default function ItemCount({stock, onAdd}) {
    const [itemCount, setItemCount] = useState(0);

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
        onAdd(itemCount);
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
          <Button id="addToCart" className="addToCart" onClick={addToCart} size="small" variant="outlined" color="success" startIcon={<AddShoppingCartIcon />}>Agregar</Button>
    </div>
    )
}