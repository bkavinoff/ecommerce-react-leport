//import { ProductionQuantityLimits } from '@mui/icons-material';
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

//componentes:
import mockProductos from '../Data/Data'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => { 
    const {id} = useParams();//recibo el id del producto que quiero mostrar

    const [product, setProductDetail] = useState({}); //seteo el useState con un obj vacío

    const getProductDetail = (idProd)=>{
        return new Promise ( (resolve,reject)=>{
            resolve (
                filterProductById(mockProductos,id)
            )
        })
    }

    const filterProductById = (array, id) => {
        return array.map( (prod) => {
            if (prod.id == id) {
                return setProductDetail(prod); //guardo el objeto en el useState
            }
        })
        
    }

    //esto se ejecuta una sola vez
    useEffect(  ()=>{
        setTimeout( () => {
            return getProductDetail(id) //hago la llamada al promise enviandole el id del producto para obtener el obj
        },2000)
    }, [])

    return(
        
        <div className="container-product-detail">
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer;
