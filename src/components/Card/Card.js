import './Card.css';
import Button from '@mui/material/Button';

export default function Card(props){
    
    return(
        <div className="card">
            <h2>{props.title}</h2>
            <p>Talle: {props.size}</p>
            <p>Precio: ${props.price}</p>
            <Button>Comprar</Button>
        </div>
    )
}