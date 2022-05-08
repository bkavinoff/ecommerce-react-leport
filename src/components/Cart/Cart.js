import React, {useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'

//MUI:
import { fabClasses, MenuItem } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import RemoveShoppingCartRoundedIcon from '@mui/icons-material/RemoveShoppingCartRounded';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import Container from '@mui/material/Container'
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


//css
import './Cart.css'

//components:
import ModalCustom from '../Modal/Modal'

//Context
import CartContext from '../../context/CartContext';
import ThemeContext from '../../context/ThemeContext'

//firestore:
import db from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'

const Cart = () => {
    const {lightTheme} = useContext(ThemeContext)
    const {cart, removeItemFromCart, clearCart, totalPrice} = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const [validForm, setValidForm] = useState(true)
    const [successOrder, setSuccessOrder] = useState()
    const [email2State, setEmail2State] = useState('')
    const [userValues, setUserValues] = useState(
        {
            name:'',
            email:'',
            phone:''
        }
    )
    const [order, setOrder] = useState(
        {
            buyer:userValues,
            items:cart,
            total:totalPrice
        }
    )

    const handleItemClick = (e) =>{
        e.preventDefault()
        e.stopPropagation()
    }
    const handleEmptyCart = (e) =>{
        e.stopPropagation()
        clearCart()
    }
    const handleDeleteClick = (id) => (e) =>{
        e.stopPropagation()
        removeItemFromCart(id)
    }

    const handleCreateOrder = (e) =>{
        e.stopPropagation()
        e.preventDefault()
        setOpenModal(true)
    }

    const getLightColorButton = (theme) => {
        return ({
            color: theme.palette.getContrastText(green[100]),
            backgroundColor: green[100],
            '&:hover': {
              backgroundColor: green[200],
            },
            borderColor: green[400]
        })
    }

    const getDarkColorButton = (theme) => {
        return ({
            color: theme.palette.getContrastText(green[700]),
            backgroundColor: green[700],
            '&:hover': {
              backgroundColor: green[500],
            },
            borderColor: green[900]
        })
    }

    const ColorButton = styled(Button)(({ theme }) => (
        (lightTheme)?getLightColorButton(theme):getDarkColorButton(theme)
    ));

    const navigate = useNavigate();

    const changePage = ()=>{
        navigate(`/`)
    }

    

    const resetForm = (e)=>{
        setUserValues({
            name:'',
            email:'',
            phone:''
       })
     }

    const handleChangeEmail2 = (e) => {
        let email2 = (email2State!=''  ?  email2State  :  '')
        email2 = e.target.value
        setEmail2State(email2)
        if (email2 === userValues.email){
            setValidForm(true)
        }else{
            setValidForm(false)
        }
    }

    const handleChange = (e)=>{
        let obj = {
            name:(userValues.name!=''?userValues.name:''),
            email:(userValues.email!=''?userValues.email:''),
            phone:(userValues.contactMphoneessage!=''?userValues.phone:'')
        }
        

        switch (e.target.name){
          case "name":{
            obj.name=e.target.value
            break}
          case "email":{
            obj.email=e.target.value
            break}
          case "phone":{
            obj.phone=e.target.value
            break}
        }
        
        setUserValues(
            userValues => (obj)
        )
    }

    const pushOrder = async(prevOrder) => {
        const collectionFirebase = collection(db, 'orders')
        const orderDoc = await addDoc(collectionFirebase, prevOrder)
        setSuccessOrder(orderDoc.id)
    }

    const checkValidForm = () => {
        if (validForm)
        {            
            let prevOrder = {...order,
                            buyer:userValues}

            //seteo la orden con los datos del comprador
            setOrder({...order,
                buyer: userValues})
            
            pushOrder(prevOrder)
        } 
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        checkValidForm()
    }

    return (
        <Container>
            <h1>Carrito</h1>
            
            {(cart.length > 0)?
            (
                <div>
                    {cart.map( (product)=>{
                        return (
                            <MenuItem key={product.id} onClick={handleItemClick}>
                                <div>
                                    <img className="cartProductImage" src={`./img/${product.image}`} alt={product.image} />
                                </div>
                                <div>
                                    <p>{product.title}</p>
                                    <span>Valor Unitario: ${product.price}</span>
                                    <p>Cantidad: {product.qty}</p>
                                    <p>Subtotal: ${(product.qty * product.price)}</p>
                                </div>
                                <div>
                                    <DeleteIcon id={product.id} onClick={handleDeleteClick(product.id)}/>
                                </div>
                            </MenuItem>
                        )
                    })}
                    
                    <p>Total: ${totalPrice}</p>
                    <div className='containerBtnSendOrder'>
                        <div className='inputSendOrder' >
                            <ColorButton onClick={handleEmptyCart} variant="outlined"  startIcon={<RemoveShoppingCartRoundedIcon />}>Vaciar carrito</ColorButton>
                        </div>
                        <div className='inputSendOrder' >
                            <ColorButton onClick={handleCreateOrder} variant="outlined" startIcon={<ShoppingCartCheckoutRoundedIcon />}>Finalizar compra</ColorButton>
                        </div>
                    </div>
                </div>
            ) 
            :
            <div>
                No hay items en el carrito
            </div>
            }

            <div className='inputSendOrder' >
                <ColorButton onClick={changePage} variant="outlined" startIcon={<ArrowBackIosNewRoundedIcon />}>Seguir Comprando</ColorButton>
            </div>
            
            <ModalCustom handleClose={()=>setOpenModal(false)} open={openModal}>
                <Container>
                    
                    {successOrder?
                        (
                            <div>
                                <h2>Orden creada con éxito</h2>
                                <p>Orden: {successOrder}</p>
                            </div>
                        )
                        :
                        (
                            <div>
                                <h2>Datos del Cliente</h2>
                                <Box
                                component="form"
                                sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                                onSubmit={handleSubmit} 
                                >
                                <div className='containerBtnSendOrder'>
                                    <div className='inputSendOrder' >
                                        <TextField onChange={handleChange} value={userValues.name} name="name" id="name" label="Nombre y Apellido" variant="outlined" />
                                    </div>
                                    <div className='inputSendOrder' >
                                        <TextField onChange={handleChange} value={userValues.phone} name="phone" id="phone" label="Teléfono" variant="outlined" inputProps={{ inputMode: 'numeric'}}/>
                                    </div>
                                    <div className='inputSendOrder' >
                                        <TextField onChange={handleChange} value={userValues.email} name="email" id="email" label="Email" variant="outlined" />
                                    </div>
                                    <div className='inputSendOrder' >
                                        <TextField onChange={handleChangeEmail2} value={email2State} name="email2" id="email2" label="Confirme email" variant="outlined" />
                                    </div>
                                </div>

                                <div>
                                {!validForm?
                                    <span className='spanEmailVerification'>El email no coincide</span>
                                :
                                    <span></span>
                                }
                                </div>
                                
                                <div className='containerBtnSendOrder'>
                                    <Button className='btnSendOrderPopup' onClick={resetForm} variant="contained" color="success">Limpiar</Button>
                                    <Button className='btnSendOrderPopup' type="submit" variant="contained" color="success">Enviar</Button>
                                </div>
                                </Box>
                            </div>
                        )
                    }
                </Container>
            </ModalCustom>
        </Container>
      )
  }
  
  export default Cart


