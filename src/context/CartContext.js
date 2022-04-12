import {createContext, useState} from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addProductToCart = (product, qty)=>{
        product.qty = qty
        setCart(cart => [...cart, product])
    }

    const removeItemFromCart = (product) =>{
        console.log("Remove item from cart: ", product)
    }

    const clearCart = ()=>{
        setCart([])
    }

    const isInCart = (id)=>{
        console.log("item is in cart?", id)
    }

    const data = {
        cart,
        addProductToCart,
        removeItemFromCart,
        clearCart,
        isInCart
    }

    return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext