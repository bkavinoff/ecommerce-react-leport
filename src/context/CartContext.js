import {createContext, useState} from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const handleCart = ()=>{
        console.log("Funcion desde contexto")
    }
    const data = {
        cart,
        handleCart
    }
    return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext