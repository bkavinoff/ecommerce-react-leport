import { ProductionQuantityLimits } from '@mui/icons-material';
import React, {useState, useEffect} from 'react'

//componentes:
import mockProductos from '../Data/Data'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({id}) => { //recibo el id del producto que quiero mostrar

    const [product, setProductDetail] = useState({}); //seteo el useState

    const getProductDetail = (idProd)=>{
        return new Promise ( (resolve,reject)=>{  
            resolve ( JSON.stringify(mockProductos[idProd]) ) //devuelvo el json del objeto que se encuentra en la posición recibida, simulando una respeusta de un API
        })
    }

    //esto se ejecuta una sola vez
    useEffect(  ()=>{
        setTimeout( () => {
            return getProductDetail(id) //hago la llamada al promise enviandole el id del producto para obtener el json
            .then( (data) => { return  JSON.parse(data)  } )
            .then( (data) =>{setProductDetail(data)}) //guardo el objeto en el useState
        },2000)
    }, [])

    return(
        
        <div className="container-product-detail">
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer;
