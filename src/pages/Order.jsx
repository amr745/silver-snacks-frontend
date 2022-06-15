
import React from "react";
import { Row, Col, Button } from "react-bootstrap";


const Order = ({ cartItem }) => {

    const [isOrderPlaced, setIsOrderPlaced] = React.useState(false);

    let priceArr = [];

    cartItem.forEach((element) => {
        priceArr.push((element.price) * (element.selectedQty));
    })

    let subTotal = priceArr.reduce((a, b) => a + b);

    console.log(subTotal)

    let total = (subTotal * 0.07) + subTotal;



    return (
        <div className="order">
            {isOrderPlaced && <div className="order-placed">
                <h1>Thank You!! </h1>
                <h3>Your Order has been placed.</h3>
            </div>}
            <div >
                <div className="order-list-summary">
                    <div className="order-list">
                        <h3>Order List</h3>
                        <div>
                            <Row>
                                <Col style={{ fontWeight: 'bolder' }}>Product</Col>
                                <Col style={{ fontWeight: 'bolder' }}>Qty</Col>
                                <Col style={{ fontWeight: 'bolder' }}>Price</Col>
                            </Row>

                        </div>
                        {cartItem.map((item) => (
                            <div key={item._id} className="order-list-items">
                                <Row>
                                    <Col style={{
                                    }}>
                                        <img className="order-img-item" src={item.img} />{`${item.name}`}
                                    </Col>
                                    <Col style={{
                                    }}>
                                        {item.selectedQty}
                                    </Col>
                                    <Col style={{
                                    }}>
                                        {item.price}
                                    </Col>
                                </Row>

                            </div>
                        ))}
                    </div>
                    <div className="order-summary">
                        <div className="order-summary-items">
                            <h3>Order Summary</h3>
                            <div>
                                <p>Subtotal: {subTotal.toFixed(2)}</p>
                                <p>Tax: 7% </p>
                                <p>Total: {total.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            {!isOrderPlaced && <div className="place-order-button">
                <Button variant="primary" onClick={() => { setIsOrderPlaced(true); }}>Place Order</Button>

            </div>}
        </div >
    )
}

export default Order;