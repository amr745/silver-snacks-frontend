import { useState, useEffect } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md"

const Cart = ( {cartItem} ) => {
    console.log(cartItem)

    const [editQuantity, setEditQuantity] = useState(0);

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
      return(  <>
        {cartItem.map((product) => (
            <div key={product._id}>
                <h4>{product.name}</h4>
            <button onClick={handleClickIncrement}>+</button>
            {product.quantity}
            <button onClick={handleChangeDecrement}>-</button>
            <button>Remove Item</button>
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