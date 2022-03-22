import './Card.css';
import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Card(props){
    
    return(
        <div className="card">
            <h2>{props.title}</h2>
            <p>Talle: {props.size}</p>
            <p>Precio: ${props.price}</p>
            <Button size="small" variant="outlined" color="success" startIcon={<AddShoppingCartIcon />}>Agregar</Button>
        </div>
    )
}