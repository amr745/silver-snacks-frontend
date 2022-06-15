import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Show from "./Show";
import { Card, Button, Row, Col } from "react-bootstrap";
const Home = ({ products }) => {


  const loaded = () => {
    return (


      <Row xs={2} md={3} lg={3} className="mb-3 mt-3" className="home-bg">
        {products.map((product) => (
          <Col className="mb-3 mt-3">
            <div className="product-data" key={product._id}>

              <Card style={{ width: '18rem', margin: 'auto', backgroundColor: "darkslateblue", borderRadius: "8px" }}>
                <Card.Img className="product-card-img" style={{ height: "286" }} variant="top" src={product.img} />
                <Card.Body>
                  <Card.Title ><Link style={{ textDecoration: "none" }} to={`/products/${product._id}`}> <h3 className="product-card-name">{product.name}</h3></Link></Card.Title>
                  <Button className="product-card-price" variant="primary">${product.price}</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>

    )
  }
  const loading = () => {
    return <h1>Loading...</h1>
  }
  return products ? loaded() : loading();
}
export default Home