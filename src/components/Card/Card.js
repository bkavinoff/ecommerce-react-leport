import React, {useState, useEffect} from 'react';

//css:
import './Card.css';

//MUI:
import Button from '@mui/material/Button';

//Componentes:
import ItemCount from '../ItemCount/ItemCount';

export default function Card({data}){
    const {title, size, price} = data;

    const [count, setCount] = useState(1);//seteo el estado inicial del contador. Se estructura entre corchetes
    let initial = 0;
    console.log("estado Contador: " + count);

const addStock = () => {
    setCount(count + 1);
}

const removeStock = () => {
    (count-1 < 0) ? setCount(0) : setCount(count - 1);
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
            <h2>{title}</h2>
            <p>Talle: {size}</p>
            <p>Precio: $ {price}</p>
            <p>Stock: {count}</p>
            
            <Button onClick={removeStock} size="small" variant="outlined" color="success" >- Stock</Button>
            <Button onClick={addStock} size="small" variant="outlined" color="success" >+ Stock</Button>
            <ItemCount stock={count} initial={initial} onAdd={onAdd}/>
        </div>
    )
}