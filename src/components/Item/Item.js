import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

//css:
import './Item.css';

//MUI:
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
//Componentes:

export default function Card({data}){
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
                <Button variant="outlined" color="success" >Ver Detalles</Button>
        </div>
    )
}