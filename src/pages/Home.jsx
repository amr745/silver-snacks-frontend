import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Show from "./Show";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaGratipay } from "react-icons/fa";
const Home = ({ products }) => {


  const loaded = () => {
    return (


      <Row xs={2} md={4} lg={4} className="mt-3" id="home-bg">
        {products.map((product) => (
          <Col className="mb-3 mt-3">
            <div className="product-data" key={product._id}>

              <Card style={{ width: '18rem', margin: 'auto', backgroundColor: "rgb(238, 77, 58)", borderRadius: "8px", boxShadow: "4px 8px 9px gray" }}>
                <Link style={{ textDecoration: "none" }} to={`/products/${product._id}`}> <Card.Img className="product-card-img" style={{ height: "286" }} variant="top" src={product.img} /></Link>

                <Card.Body>
                  <Card.Title ><Link style={{ textDecoration: "none" }} to={`/products/${product._id}`}> <h3 className="product-card-name">{product.name}</h3></Link></Card.Title>
                  <Link style={{ textDecoration: "none" }} to={`/products/${product._id}`}> <Button
                    className="product-card-price" variant="primary">${product.price}</Button></Link>

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