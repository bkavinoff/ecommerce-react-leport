import {createContext, useState} from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addProductToCart = (product, qtyToAdd)=>{
        
        if ( isInCart(product.id) ) {

            //busco el producto en el cart
            const pr = cart.find((p) => p.id === product.id);
            if(product.qty + qtyToAdd <= product.stock){

                //updateo la cantidad
                pr.qty = product.qty + qtyToAdd;

                //genero un nuevo cart con el producto actualizado
                const newCart = [ ...cart ];

                //guardo el cart actualizado
                setCart(newCart);

                console.log("Cart:", cart)
            }else{
                alert("No se puede agregar más productos que el stock disponible")
            }
        } else {
            product.qty = qtyToAdd
            setCart([ ...cart, product])
        }
         
    }

    const removeItemFromCart = (id) =>{
        console.log("Remove item from cart: ", id)
        setCart(cart.filter(p => p.id !== id))
        console.log("Cart after Delete:", cart)
    }

    const clearCart = ()=>{
        setCart([])
    }

    const isInCart = (id)=>{
        //console.log("item id is in cart?", id)
        return cart.some( prod => prod.id === id)
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