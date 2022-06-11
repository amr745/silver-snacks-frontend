import { useState, useEffect } from "react";
import { MdOutlineRemoveShoppingCart, MdOutlineFu } from "react-icons/md"
import { AiOutlineShoppingCart } from "react-icons/ai";
const Cart = ({ cartItem, deleteProduct }) => {
    console.log("cartItem entry", cartItem)

    const [editQuantity, setEditQuantity] = useState([]);

    const handleClickIncrement = (productId) => {
        let existing = cartItem.find(element => element._id === productId);
        if (existing) {
            existing.selectedQty += 1;
        }
        //setEditQuantity((quantity) => quantity + 1)
    }

    const handleChangeDecrement = (productId) => {
        let existing = cartItem.find(element => element._id === productId);
        if (existing) {
            existing.selectedQty -= 1;
        }
        //setEditQuantity((quantity) => quantity - 1)
    }

    const handleRemoveCartItem = (id) => {
        const item = cartItem.find((product) => product._id === id)
        deleteProduct(item)
        // setEditQuantity((prevState) => ({
        //     cartItem: prevState.cartItem.filter(element => element != productId)
        // }))
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
                    <button onClick={() => {handleRemoveCartItem(product._id)}}>Remove Item</button>
                </div>
            ))}
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