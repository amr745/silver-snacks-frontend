import { useState, useEffect } from "react";
import { MdOutlineRemoveShoppingCart, MdOutlineFu } from "react-icons/md"
import { AiOutlineShoppingCart, AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Cart = ({ cartItem, deleteProduct, cartObject, handleRemove, handleClearCart }) => {
    console.log("cartItem entry", cartItem)

    const [editQuantity, setEditQuantity] = useState(null);

    let navigate = useNavigate();

    const handleRemoveCartItem = (id) => {
        const item = cartItem.find((product) => product._id === id)
        deleteProduct(item)
    }
    const handleClickIncrement = (productId) => {
        let existing = cartItem.find(element => element._id === productId);
        if (existing) {
            setEditQuantity(existing.selectedQty += 1);
        }
    }

    const handleChangeDecrement = (productId) => {
        let existing = cartItem.find(element => element._id === productId);
        if (existing) {
            setEditQuantity(existing.selectedQty -= 1);
        }
    }


    const handleCheckout = () => {
        navigate("/order")
    }

    const isEmpty = !cartItem;

    const EmptyCart = () => {
        <p>You do not currently have any items in your cart, click "BUY NOW" to add some!</p>
    }


    const FilledCart = () => {
        return (<div className="cart-entire">
            {cartItem.map((product) => (
                <div key={product._id} className="cart-items">
                    <div className="cart-product-img">
                        <img style={{ height: '25px', width: '25px' }} src={product.img} /><h4 className="cart-product-name">
                            {product.name}</h4>
                    </div>
                    <div className="cart-item-list">
                        <Button className="cart-item-inc-dec" onClick={() => { handleClickIncrement(product._id) }}>+</Button>
                        {product.selectedQty}
                        <Button className="cart-item-inc-dec" onClick={() => { handleChangeDecrement(product._id) }}>-</Button>
                        <Button className="cart-remove-item-button" onClick={() => handleRemove(product._id)}>Remove Item</Button>
                    </div>
                </div>

            ))}

            <div className="cart-clear-checkout">
                <div>
                    <Button style={{ marginLeft: "10px" }} onClick={handleClearCart}>Clear Cart</Button>
                </div>
                <div>
                    <Button style={{ marginLeft: "10px" }} onClick={handleCheckout}>Checkout</Button>
                </div>
            </div>
        </div>
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
        <div className="cart">
            <h3 className="cart-header">Your Shopping Cart</h3>
            {isEmpty ? EmptyCart() : FilledCart()}

        </div>
    )
}

export default Cart;