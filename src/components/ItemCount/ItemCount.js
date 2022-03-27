import React, {useState} from 'react'

//css:
import './ItemCount.css';

//MUI:
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";



export default function ItemCount({stock, initial, onAdd}) {
    const [itemCount, setItemCount] = useState(initial);

    const minusItemCount = () => {
        (itemCount-1 < 0) ? setItemCount(0) : setItemCount(itemCount - 1);
    }

    const addItemCount = () => {
        if (itemCount < stock){
            setItemCount(itemCount + 1);
        }
    }
    const addToCart = () => {
        onAdd(itemCount);
    }

    return (
      <div className="containerAddItemToCart">
          <ButtonGroup>

            <Button className="btnPlusMinusAddToCart" onClick={minusItemCount} size="small" variant="outlined" color="success" >
                <RemoveIcon fontSize="small" />
            </Button>

            <Badge color="success" badgeContent={itemCount}>
                <ShoppingCartIcon color="success"/>{" "}
            </Badge>

            <Button className="btnPlusMinusAddToCart" onClick={addItemCount} size="small" variant="outlined" color="success" >
              <AddIcon fontSize="small" />
            </Button>
            
          </ButtonGroup>
          <Button id="addToCart" onClick={addToCart} size="small" variant="outlined" color="success" startIcon={<AddShoppingCartIcon />}>Agregar</Button>
    </div>
    )
}