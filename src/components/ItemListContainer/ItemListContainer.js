import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

//css:
import './ItemListContainer.css';

//MUI:
import Container from '@mui/material/Container'
import LinearProgress from '@mui/material/LinearProgress';

//Componentes:
import Item from '../Item/Item'
import CategoryTitle from '../CategoryTitle/CategoryTitle'

//firebase:
import db from '../../firebase'
import { collection, getDocs} from 'firebase/firestore'


const ListProducts = () => {

    const {categoryId} = useParams();//recibo el id del producto que quiero mostrar
    
    const [products, setProducts] = useState([])//seteo el valor inicial del state
    const [category, setCategory] = useState({})
    const [loading , setLoading] = useState(true)
    

    const getProducts = async () => {
        const productCollection = collection(db, 'products') //con esto traigo la coleccion del firestore
        const productsSnapshot = await getDocs(productCollection) //con esto traigo los documentos de esa coleccion


        const productList = productsSnapshot.docs.map((doc)=>{
            let product = doc.data()
            product.id = doc.id
            return product
        })

        return productList
    }

    const getProductsAndCategories = ()=>{
        getProducts()
        .then( (data) =>{
            setLoading(false)
            if (typeof categoryId === 'undefined') {
                setProducts(data)
            }else{ 
                
                filterProductByCategoryId(data,categoryId)
            }
        })
    }

    const filterProductByCategoryId = (array, catId) => {
        
        let arr = array.filter( (prod) => {
            return prod.categoryId==catId
        })
        setProducts(arr)
    }

    //esto se ejecuta después que se renderiza
    useEffect(  ()=>{
        
        getProductsAndCategories();

    },[])

    //esto se ejecuta cada vez que cambia el categoryID
    useEffect(  ()=>{
        setLoading(true)
        getProductsAndCategories();
        
    },[categoryId])

    

    return(
        <Container>
            <div className="container-cards">
               
                {loading?
                    (
                        <div>
                            <h2>Cargando...</h2>
                            <LinearProgress color="success" />
                        </div>
                    )
                    :
                    (<div>
                        <CategoryTitle category = {category} />
                        <div className='productContainer'>
                        {products.map( (product) => {
                            return(
                                <Item className="itemCard" key={product.id} data={product}/>
                            )
                        }
                        )}
                        </div>
                    </div>)
                }
                
            </div>
        </Container>
    )
}

export default ListProducts;