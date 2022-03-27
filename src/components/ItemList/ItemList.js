import React, {useState, useEffect} from 'react'

//css:
import './ItemList.css';

//Componentes:
import Item from '../Item/Item'

const ListProducts = () => {
    const mockProductos = [{
        id: 1,
        image:'remera-roma.jpg',
        title: 'Remera',
        size: 'S',
        price: '200',
        stock: 5
    },
    
    {
        id: 2,
        image:'campera-calandria.jpg',
        title: 'Campera',
        size: 'M',
        price: '2000',
        stock: 3
    },
    {
        id: 3,
        image:'buzo-san-diego.jpg',
        title: 'Buzo',
        size: 'L',
        price: '500',
        stock: 4
    },
    {
        id: 4,
        image:'camisa-aberdeen.jpg',
        title: 'Camisa',
        size: 'XL',
        price: '1500',
        stock: 2
    }]

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