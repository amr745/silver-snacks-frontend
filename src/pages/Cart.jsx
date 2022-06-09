import { useState, useEffect } from "react";
import { AiOutlineShopping } from "react-icons/fa"

const Cart = () => {
    const removeProduct = () => {
        deleteProduct(id)
    }


    return (
        <div>
            <button onClick={() => removeProduct(id)}></button>
        </div>
    )
}

export default Cart