//import { ProductionQuantityLimits } from '@mui/icons-material';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
//MUI
import LinearProgress from '@mui/material/LinearProgress';

//componentes:
import mockProductos from '../Data/Data'
import ItemDetail from './ItemDetail'

//firebase:
import { doc, getDoc } from 'firebase/firestore'
import db from '../../firebase'

const ItemDetailContainer = () => { 
    const [loading , setLoading] = useState(true)

    const {id} = useParams();//recibo el id del producto que quiero mostrar

    const [product, setProductDetail] = useState({}); //seteo el useState con un obj vacío

    const navigate = useNavigate()

    const getProduct = async() =>{
        const docRef = doc(db,"products", id)
        const docSnap = await getDoc(docRef)

        if (!docSnap.exists()){
            console.log("No existe el documento con id: ", id)
            navigate('error')
        }
        let snap = docSnap.data()
        snap.id = id
        //console.log("Product Data from DB: ", snap)
        return snap
    }

    //esto se ejecuta una sola vez
    useEffect(  ()=>{
        getProduct()
        .then( (data) =>{
            setLoading(false)
            setProductDetail(data)
        })
    }, [])

    return(
        <div>
        {loading?
            (
                <div>
                    <h2>Cargando...</h2>
                    <LinearProgress color="success" />
                </div>
            )
            :(
            <div className="container-product-detail">
                <ItemDetail product={product}/>
            </div>
        )}
        </div>
    )
}

export default ItemDetailContainer;
