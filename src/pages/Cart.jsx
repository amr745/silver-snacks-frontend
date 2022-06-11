import { useState, useEffect } from "react";
import { MdOutlineRemoveShoppingCart, MdOutlineFu } from "react-icons/md"
import { AiOutlineShoppingCart } from "react-icons/ai";
const Cart = ( {cartItem} ) => {
    console.log(cartItem)

    const [editQuantity, setEditQuantity] = useState([]);

    const handleClickIncrement = () => {
        setEditQuantity((quantity) => quantity + 1)
    }

    const handleChangeDecrement = () => {
        setEditQuantity((quantity) => quantity - 1)
    }

    const isEmpty = !cartItem;

    const EmptyCart = () => {
        <p>You do not currently have any items in your cart, click "BUY NOW" to add some!</p>
    }

    const FilledCart = () => {
        const selectedQuantity = 1;
      return(  <>
        {cartItem.map((product) => (
            <div key={product._id}>
                <h4>{product.name}</h4>
            <button onClick={() => handleClickIncrement(product.quantity)}>+</button>
            {product.quantity}
            <button onClick={() => handleChangeDecrement(product.quantity)}>-</button>
            <button>Remove Item</button>
            </div>
        ))}
        </>
      )
    }

    // const emptyCart = <MdOutlineRemoveShoppingCart />
    // const fullCart = <AiOutlineShoppingCart />
    // const cartStatus = () => {
    //     if(EmptyCart) {
    //         return emptyCart
    //     } else if (FilledCart) {
    //        return fullCart
    //     }
    // }
    return (
        <div className="Cart">
            <h3>Your Shopping Cart</h3>
            {isEmpty ? EmptyCart() : FilledCart()}
         
        </div>
    )
}

export default Cart;