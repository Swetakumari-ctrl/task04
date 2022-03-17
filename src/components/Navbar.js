import React, { useState } from "react";
import "./Navbar.css";
import { Card, CardGroup, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const productdata = [
  {
    imagesrc:
      "https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/68185/8996/1122017-TEBC_4__20503.1618516034.jpg?c=2",
    shopname: "SHOE NAME 11",
    rating: "5.0",
    price: "2,350.00",
    deliveryby: "Tomorrow",
  },
  {
    imagesrc:
      "https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/63320/8698/(1110518-WDDS)_(4)__02007.1616607135.png?c=2",
    shopname: "SHOE NAME 22",
    rating: "5.0",
    price: "1,350.00",
    deliveryby: "Friday, 6 Feb",
  },
  {
    imagesrc:
      "https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/69053/8974/1119394-AEBL_4__83772.1618514248.jpg?c=2",
    shopname: "SHOE NAME 43",
    rating: "4.0",
    price: "4,550.00",
    deliveryby: "Tomorrow",
  },
  {
    imagesrc:
      "https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/68185/8996/1122017-TEBC_4__20503.1618516034.jpg?c=2",
    shopname: "SHOE NAME 48",
    rating: "3.0",
    price: "9,950.00",
    deliveryby: "Tomorrow",
  },
  {
    imagesrc:
      "https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/63320/8698/(1110518-WDDS)_(4)__02007.1616607135.png?c=2",
    shopname: "SHOE NAME 52",
    rating: "2.0",
    price: "350.00",
    deliveryby: "Thursday, Feb 5",
  },
  {
    imagesrc:
      "https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/69053/8974/1119394-AEBL_4__83772.1618514248.jpg?c=2",
    shopname: "SHOE NAME 13",
    rating: "3.0",
    price: "4,650.00",
    deliveryby: "Monday, Feb 20",
  },
  {
    imagesrc:
      "https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/68185/8996/1122017-TEBC_4__20503.1618516034.jpg?c=2",
    shopname: "SHOE NAME 11",
    rating: "4.0",
    price: "3,350.00",
    deliveryby: "Monday, Feb 20",
  },
  {
    imagesrc:
      "https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/63320/8698/(1110518-WDDS)_(4)__02007.1616607135.png?c=2",
    shopname: "SHOE NAME 22",
    rating: "1.0",
    price: "1,350.00",
    deliveryby: "Tuesday, Feb 3",
  },
  {
    imagesrc:
      "https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/69053/8974/1119394-AEBL_4__83772.1618514248.jpg?c=2",
    shopname: "SHOE NAME 43",
    rating: "2.0",
    price: "4,550.00",
    deliveryby: "Tomorrow",
  },
];

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState(productdata);
  const [filteredproduct, setFilteredProduct] = useState(productdata);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredProduct(
      product.filter((product) => {
        return product.shopname.toLowerCase().includes(search.toLowerCase());
      })
    );
  };

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span></span>
            <span></span>
          </h2>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">FEATURED</a>
            </li>
            <li>
              <a href="#">PRODUCTS</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="head">
        <font size="50">
          <h1>
            <center>
              <b>Shoe Company Name</b>
            </center>
          </h1>
        </font>
        <font size="4.5">
          <div className="content">
            <p>
              <center>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ut
                eius nihil amet magnam placeat a officia quos officiis accusamus
                dolore, Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Et ut eius nihil amet magnam placeat a officia quos
                officiis accusamus dolore,
              </center>
            </p>
          </div>
        </font>
      </div>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => handleChange(e)}
        />
        <Button onClick={(e) => handleSubmit(e)} variant="warning">
          SEARCH
        </Button>{" "}
      </Form>
      <div className="products">
        <p>
          <b>9 PRODUCTS</b>
        </p>
      </div>
      <CardGroup className="cardbox">
        {filteredproduct.map((prod) => {
          return (
            <div
              style={{
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div
                style={{
                  width: "26rem",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  margin: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Card.Img variant="top" src={prod.imagesrc} />
                <Card.Body className="box">
                  <Card.Title>
                    <h1>
                      <b>{prod.shopname}</b>
                    </h1>
                    <div className="ratings">
                      <Button variant="warning">★ {prod.rating}</Button>{" "}
                    </div>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      <b>₹{prod.price}</b>
                    </p>
                  </Card.Text>
                </Card.Body>
                <small className="text-muted">
                  Delivery by: {prod.deliveryby}
                </small>
              </div>
            </div>
          );
        })}
      </CardGroup>
    </>
  );
};
export default Navbar;
