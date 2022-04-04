import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

//css:
import './ItemListContainer.css';

//MUI:
import Container from '@mui/material/Container'

//Componentes:
import Item from '../Item/Item'
import CategoryTitle from '../CategoryTitle/CategoryTitle'
import mockProductos from '../Data/Data'
import mockCategories from '../Data/Categories'

const ListProducts = () => {

    const {categoryId} = useParams();//recibo el id del producto que quiero mostrar
    
    const [products, setProducts] = useState([])//seteo el valor inicial del state
    const [category, setCategory] = useState({})
    const catId = categoryId;

    //products
    const getProducts = () => {
        return new Promise ( (resolve,reject)=>{

            setTimeout( () => {
                resolve(filterProductByCategoryId(mockProductos, catId))
            },1000)
        })
    }

    const filterProductByCategoryId = (array, catId) => {
        
        if (typeof catId === 'undefined'){
            //si no recibe categoryId, muestra todos
            return array;
        }else{
            //si recibe categoryId, filtra por esa categoría
            let arr = array.filter( (prod) => {
                return prod.categoryId==catId
            })
            
            return arr;
        }
    }

    //category
    const getCategories = (catId) => {
        return new Promise ( (resolve,reject)=>{
                resolve(filterCategoryById(mockCategories,categoryId))
        })
    }

    const filterCategoryById = (arrayCat, catId) => {
        if (typeof categoryId === 'undefined'){
            //si no recibe categoryId, muestra todos
            return setCategory({
                id: 0,
                name: 'Productos'
            });
        }else{

            let arr = arrayCat.filter( (cat) => {
                return cat.id==catId
            })
            //console.log(arr[0])
            return setCategory(arr[0])
        }
    }

    //esto se ejecuta después que se renderiza
    useEffect(  ()=>{
        
        getProductsAndCategories();

    },[])

    useEffect(  ()=>{
        getProductsAndCategories();
        
    },[products])

    const getProductsAndCategories = ()=>{
        getProducts()
        .then( (data) =>{
            setProducts(data)
        })

        getCategories()
    }

    return(
        <Container>
            <div className="container-cards">
                <CategoryTitle category = {category} />
                <div className='productContainer'>
                    {products.map( (product) => {
                            return(
                                <Item className="itemCard" key={product.id} data={product} />
                        )
                        }
                    )}
                </div>
            </div>
        </Container>
    )
}

export default ListProducts;