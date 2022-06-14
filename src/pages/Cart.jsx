import { useState, useEffect } from "react";
import { MdOutlineRemoveShoppingCart, MdOutlineFu } from "react-icons/md"
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useNavigate } from "react-router";

const Cart = ({ cartItem, deleteProduct, cartObject, handleRemove, handleClearCart, handleClickIncrement, handleChangeDecrement }) => {
    console.log("cartItem entry", cartItem)

    const [editQuantity, setEditQuantity] = useState([]);
    const [cartItems, setCartItems] = useState(cartItem);
    let navigate = useNavigate()

    const handleRemoveCartItem = (id) => {
        const item = cartItem.find((product) => product._id === id)
        deleteProduct(item)
        // setEditQuantity((prevState) => ({
        //     cartItem: prevState.cartItem.filter(element => element != productId)
        // }))
    }


    const handleCheckout = () => {
        navigate("/order")
    }

    const isEmpty = !cartItem;

    const EmptyCart = () => {
        <p>You do not currently have any items in your cart, click "BUY NOW" to add some!</p>
    }


    const FilledCart = () => {
        return (<>
            {cartItem.map((product) => (
                <div key={product._id}>
                    <h4>{product.name}</h4>
                    <button onClick={() => { handleClickIncrement(product._id) }}>+</button>
                    {product.selectedQty}
                    <button onClick={() => { handleChangeDecrement(product._id) }}>-</button>
                    <button onClick={() => handleRemove(product._id)}>Remove Item</button>
                </div>

            ))}

            <div>
                <button onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div>
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </>
        )
    }

    const emptyCart = <MdOutlineRemoveShoppingCart />
    const fullCart = <AiOutlineShoppingCart />
    const cartStatus = () => {
        if (EmptyCart) {
            return emptyCart
        } else if (FilledCart) {
            return fullCart
        }
    }
    return (
        <div className="Cart">
            <h3>Your Shopping Cart</h3>
            {isEmpty ? EmptyCart() : FilledCart()}

        </div>
    )
}

export default Cart;