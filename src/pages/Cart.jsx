import { useState, useEffect } from "react";


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