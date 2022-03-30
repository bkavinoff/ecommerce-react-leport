import React, {useState, useEffect} from 'react'

//css:
import './ItemList.css';

//Componentes:
import Item from '../Item/Item'
import mockProductos from '../Data/Data'

const ListProducts = () => {
    

    //const [showCard, setShowCard] = useState(true)
    const [products, setProducts] = useState([])

     const getProducts = () => {
        return new Promise ( (resolve,reject)=>{
            setTimeout( () => {
                resolve(mockProductos)
            },2000)
        })
    }

    //esto se ejecuta después que se renderiza
    useEffect(  ()=>{
        getProducts().then( (data) =>{
            setProducts(data)
        })
    },[])

// const hideCard = () => {
//     setShowCard(!showCard);
// }

    return(
        
        <div className="container-cards">
            <h2>Productos en Oferta</h2>
            {products.map( (product) => {
                return(
                     <div key={product.id}>
                        <Item data={product} />
                     </div>
                )
            })}
        </div>
    )
}

export default ListProducts;