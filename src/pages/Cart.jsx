import { useState, useEffect } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md"

const Cart = ( {cartItem} ) => {
    console.log(cartItem)
    const isEmpty = !cartItem;

    const EmptyCart = () => {
        <p>You do not currently have any items in your cart, click "BUY NOW" to add some!</p>
    }

    const FilledCart = () => {
      return(  <>
        {cartItem.map((product) => (
            <div key={product._id}>
                <h4>{product.name}</h4>
            </div>
        ))}
        </>
      )
    }
 
    return (
        <div className="Cart">
            <h3><MdOutlineRemoveShoppingCart />Your Shopping Cart</h3>
            {isEmpty ? EmptyCart() : FilledCart()}
        </div>
    )
}

export default Cart