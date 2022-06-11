import { useState, useEffect } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md"

const Cart = ({ products }) => {
    const isEmpty = !products;

    const EmptyCart = () => {
        <p>You do not currently have any items in your cart, click "BUY NOW" to add some!</p>
    }

    const FilledCart = () => {
        <>
            {products.map((product) => (
                <div key={product._id}>
                    <h4>{product.name}</h4>
                    <button>+</button>
                    {product.selectedQuantity}
                    <button>-</button>
                </div>
            ))}
        </>
    }

    return (
        <div className="Cart">
            <h3><MdOutlineRemoveShoppingCart />Your Shopping Cart</h3>
            {isEmpty ? EmptyCart() : FilledCart()}
        </div>
    )
}

export default Cart