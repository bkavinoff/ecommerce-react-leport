import {createContext, useState} from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product, qtyToAdd)=>{
        if ( isInCart(product.id) ) {

            //busco el producto en el cart
            const pr = cart.find((p) => p.id === product.id);

            if(product.qty + qtyToAdd <= pr.stock){
                
                //updateo la cantidad
                pr.qty = product.qty + qtyToAdd;

                //genero un nuevo cart con el producto actualizado
                const newCart = [ ...cart ];

                //guardo el cart actualizado
                setCart(newCart);

                //seteo la suma del total:
                setTotalPrice(totalPrice + (pr.price * pr.qty))
            }else{
                alert("No se puede agregar más productos que el stock disponible")
            }
        } else {
            product.qty = qtyToAdd
            setCart([ ...cart, product])
            setTotalPrice(totalPrice + (product.price * qtyToAdd))
        }
         
    }

    const removeItemFromCart = (id) =>{
        setCart(cart.filter(p => p.id !== id))

        //update total price
        let pr = cart.find(p => p.id === id)

        setTotalPrice(totalPrice - (pr.price * pr.qty))
    }

    const clearCart = ()=>{
        setCart([])
        setTotalPrice(0)
    }

    const isInCart = (id)=>{
        return cart.some( prod => prod.id === id)
    }

    const data = {
        cart,
        addProductToCart,
        removeItemFromCart,
        clearCart,
        isInCart,
        totalPrice
    }

    return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext