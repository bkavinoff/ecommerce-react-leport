import {createContext, useState} from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product, qtyToAdd)=>{
        console.log("Producto: ", product)
        console.log("Producto ID: ", product.id)
        if ( isInCart(product.id) ) {

            //busco el producto en el cart
            const pr = cart.find((p) => p.id === product.id);

            console.log("Producto en cart: ", pr)
            console.log("qtyToAdd: ", qtyToAdd)
            console.log("product.qty: ", product.qty)
            console.log("pr.stock: ", pr.stock)
            if(product.qty + qtyToAdd <= pr.stock){
                
                //updateo la cantidad
                pr.qty = product.qty + qtyToAdd;

                //genero un nuevo cart con el producto actualizado
                const newCart = [ ...cart ];

                //guardo el cart actualizado
                setCart(newCart);

                //seteo la suma del total:
                setTotalPrice(totalPrice + (pr.price * pr.qty))
                console.log("Cart:", cart)
                console.log("TotalPrice:", totalPrice)
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
        console.log("Remove item from cart: ", id)
        setCart(cart.filter(p => p.id !== id))
        console.log("Cart after Delete:", cart)

        //update total price
        let pr = cart.find(p => p.id === id)

        setTotalPrice(totalPrice - (pr.price * pr.qty))
        //calculateTotalPrice()
    }

    const clearCart = ()=>{
        setCart([])
        setTotalPrice(0)
    }

    const isInCart = (id)=>{
        //console.log("item id is in cart?", id)
        return cart.some( prod => prod.id === id)
    }

    // const calculateTotalPrice = ()=>{
    //     console.log("Entro en suma total")
    //     let total = 0

    //     cart.map( (product)=> {
    //         total = total + (product.price * product.qty)
    //     })

    //     setTotalPrice(totalPrice + total)
    //     return total
    // }

    const data = {
        cart,
        addProductToCart,
        removeItemFromCart,
        clearCart,
        isInCart,
        //calculateTotalPrice,
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