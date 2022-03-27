import React, {useState, useEffect} from 'react';

//css:
import './Item.css';

//MUI:
import Button from '@mui/material/Button';

//Componentes:
import ItemCount from '../ItemCount/ItemCount';

export default function Card({data}){
    const {title, size, price, stock, image} = data;

    const [newStock, setStock] = useState(stock);//seteo el estado inicial del contador. Se estructura entre corchetes
    let initial = 0;
    console.log("estado Contador: " + newStock);

const addStock = () => {
    setStock(newStock + 1);
}

const removeStock = () => {
    (newStock-1 < 0) ? setStock(0) : setStock(newStock - 1);
}

const onAdd = (num) => {
    alert("Se han agregado " + num + " items al carrito.");
}

// //esto se ejecutaría cada vez que se comienza el ciclo de montaje
// useEffect( () => {
//     console.log("LOG EN USEEFECT SOLO MONTAJE")
// });

// //esto se ejecutaría unicamente una vez
// useEffect( () => {
//     console.log("LOG EN USEEFECT SIEMPRE QUE ENTRE EN FASE DE ACTUALIZACION")
// },[] );

// //esto se ejecutaría cada vez que se actualiza un componente específico
// useEffect( () => {
//     console.log("LOG EN USEEFECT CUANDO CAMBIE UN COMOPNENTE ESPECIFICO")
// }, [count] );

// //esto se ejecutaría unicamente en la fase de DESMONTAJE
// useEffect( () => {
//     return () => {
//         console.log("LOG EN USEEFECT SOLO EN FASE DE DESMONTAJE")
//     }
// })


    return(
        <div className="card">
            <div>
                <img className='imgProductCard' src={`/img/${image}`} alt={image} />
            </div>
            <h2>{title}</h2>
            <p>Talle: {size}</p>
            <p>Precio: $ {price}</p>
            <p>Stock: {newStock}</p>
            
            <Button onClick={removeStock} size="small" variant="outlined" color="success" >- Stock</Button>
            <Button onClick={addStock} size="small" variant="outlined" color="success" >+ Stock</Button>
            <ItemCount stock={newStock} initial={initial} onAdd={onAdd}/>
        </div>
    )
}