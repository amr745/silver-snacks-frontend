

const Order = ({cartItem}) => {



    let priceArr = [];

    cartItem.forEach((element) => {
        priceArr.push((element.price) * (element.selectedQty));
    })

    let subTotal = priceArr.reduce((a, b) => a + b);

    let total = (subTotal * 0.07) + subTotal; 
    
    
    return (
        <div>
            {cartItem.map((item) => (
                <div key={item._id}>
                    <h1>{item.name}</h1>
                </div>
            ))}
          <div>
            <h2>Subtotal: {subTotal.toFixed(2)}</h2>
            <h2>Tax: 7% </h2>
          </div>
          <div>
            <h2>Total: {total.toFixed(2)}</h2>
          </div>
          <button>Submit Order</button>
        </div>
    )
}

export default Order;