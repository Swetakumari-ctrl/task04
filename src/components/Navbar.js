import React from "react";
import "./Navbar.css";
import { Card, CardGroup, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
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
        />
        <Button variant="warning">SEARCH</Button>{" "}
      </Form>
      <div className="products">
        <p>
          <b>9 PRODUCTS</b>
        </p>
      </div>
      <CardGroup className="cardbox">
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/68185/8996/1122017-TEBC_4__20503.1618516034.jpg?c=2"
          />
          <Card.Body className="box">
            <Card.Title>
              <h1>
                <b>SHOP NAME 11</b>
              </h1>
              <div className="ratings">
                <Button variant="warning">★ 5.0</Button>{" "}
              </div>
            </Card.Title>
            <Card.Text>
              <p>
                <b>₹2,350.00</b>
              </p>
            </Card.Text>
          </Card.Body>
          <small className="text-muted">Delivery by: Tomorrow</small>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/63320/8698/(1110518-WDDS)_(4)__02007.1616607135.png?c=2"
          />
          <Card.Body className="box">
            <Card.Title>
              <h1>
                <b>Shoe Name 22</b>
              </h1>
              <div className="ratings">
                <Button variant="warning">★ 5.0</Button>{" "}
              </div>
            </Card.Title>
            <Card.Text>
              <p>
                <b>₹1,350.00</b>
              </p>
            </Card.Text>
          </Card.Body>
          <small className="text-muted">Delivery by: Friday, 6 Feb</small>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/69053/8974/1119394-AEBL_4__83772.1618514248.jpg?c=2"
          />
          <Card.Body className="box">
            <Card.Title>
              <h1>
                <b>Shoe Name 43</b>
              </h1>
              <div className="ratings">
                <Button variant="warning">★ 4.0</Button>{" "}
              </div>
            </Card.Title>
            <Card.Text>
              <p>
                <b>₹4,550.00</b>
              </p>
            </Card.Text>
          </Card.Body>
          <small className="text-muted">Delivery by: Tomorrow</small>
        </Card>
      </CardGroup>
      <CardGroup className="cardbox">
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/68185/8996/1122017-TEBC_4__20503.1618516034.jpg?c=2"
          />
          <Card.Body className="box">
            <Card.Title>
              <h1>
                <b>Shoe Name 48</b>
              </h1>
              <div className="ratings">
                <Button variant="warning">★ 3.0</Button>{" "}
              </div>
            </Card.Title>
            <Card.Text>
              <p>
                <b>₹9,950.00</b>
              </p>
            </Card.Text>
          </Card.Body>
          <small className="text-muted">Delivery by: Tomorrow</small>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/63320/8698/(1110518-WDDS)_(4)__02007.1616607135.png?c=2"
          />
          <Card.Body className="box">
            <Card.Title>
              <h1>
                <b>Shoe Name 52</b>
              </h1>
              <div className="ratings">
                <Button variant="warning">★ 2.0</Button>{" "}
              </div>
            </Card.Title>
            <Card.Text>
              <p>
                <b>₹350.00</b>
              </p>
            </Card.Text>
          </Card.Body>
          <small className="text-muted">Delivery by: Thursday, Feb 5</small>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/69053/8974/1119394-AEBL_4__83772.1618514248.jpg?c=2"
          />
          <Card.Body className="box">
            <Card.Title>
              <h1>
                <b>Shoe Name 13</b>
              </h1>
              <div className="ratings">
                <Button variant="warning">★ 3.0</Button>{" "}
              </div>
            </Card.Title>
            <Card.Text>
              <p>
                <b>₹4,650.00</b>
              </p>
            </Card.Text>
          </Card.Body>
          <small className="text-muted">Delivery by: Monday, Feb 20</small>
        </Card>
      </CardGroup>
      <CardGroup className="cardbox">
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/68185/8996/1122017-TEBC_4__20503.1618516034.jpg?c=2"
          />
          <Card.Body className="box">
            <Card.Title>
              <h1>
                <b>Shoe Name 11</b>
              </h1>
              <div className="ratings">
                <Button variant="warning">★ 4.0</Button>{" "}
              </div>
            </Card.Title>
            <Card.Text>
              <p>
                <b>₹2,350.00</b>
              </p>
            </Card.Text>
          </Card.Body>
          <small className="text-muted">Delivery by: Monday, Feb 20</small>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/63320/8698/(1110518-WDDS)_(4)__02007.1616607135.png?c=2"
          />
          <Card.Body className="box">
            <Card.Title>
              <h1>
                <b>Shoe Name 22</b>
              </h1>
              <div className="ratings">
                <Button variant="warning">★ 1.0</Button>{" "}
              </div>
            </Card.Title>
            <Card.Text>
              <p>
                <b>₹1,350.00</b>
              </p>
            </Card.Text>
          </Card.Body>
          <small className="text-muted">Delivery by: Tuesday, Feb 3</small>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn11.bigcommerce.com/s-6wbwpjejja/images/stencil/1280x1280/products/69053/8974/1119394-AEBL_4__83772.1618514248.jpg?c=2"
          />
          <Card.Body className="box">
            <Card.Title>
              <h1>
                <b>Shoe Name 43</b>
              </h1>
              <div className="ratings">
                <Button variant="warning">★ 2.0</Button>{" "}
              </div>
            </Card.Title>
            <Card.Text>
              <p>
                <b>₹4,550.00</b>
              </p>
            </Card.Text>
          </Card.Body>
          <small className="text-muted">Delivery by: Tomorrow</small>
        </Card>
      </CardGroup>
    </>
  );
};
export default Navbar;
