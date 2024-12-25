import React from "react";
import "./Header.css";
import { Navbar, Nav, Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa";
import image1 from "./image2.png";
import food1 from "./food1.png";
import food2 from "./food2.png";
import chef from "./chef.png";
import clientOne from "./client1.png";
import clientTwo from "./client2.png";
import cat1 from "./cat1.png"
import cat2 from "./cat2.png"
import cat3 from "./cat3.png"
import cat4 from "./cat4.png"
import dish1 from "./dish1.png"
import dish2 from "./dish2.png"
import dish3 from "./dish3.png"

const FoodSection = () => {
  return (
    <>
    {/* Navbar Section */}
<Navbar expand="lg" bg="white" className="shadow-sm py-3">
  <Container>
    {/* Brand Name */}
    <Navbar.Brand href="#" className="fw-bold fs-3 text-success">
      FOODI
    </Navbar.Brand>

    {/* Custom Toggle Button */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
      <FaBars className="fs-2 text-success" />
    </Navbar.Toggle>

    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      {/* Navigation Items */}
      <Nav className="gap-3 align-items-center">
        <Nav.Link href="#" className="text-success fw-bold">
          Home
        </Nav.Link>
        <Nav.Link href="#">Menu</Nav.Link>
        <Nav.Link href="#">Services</Nav.Link>
        <Nav.Link href="#">Offers</Nav.Link>
        <Button variant="success" className="px-4 py-2">
          Contact
        </Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


      {/* Hero Section */}
    
      <Container className="py-5">
  <Row className="align-items-center">
    {/* Text Section */}
    <Col xs={12} lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
      <h1 className="fw-bold display-4">
        Dive into Delights Of Delectable{" "}
        <span style={{ color: "#00d84c" }}>Food</span>
      </h1>
      <p className="text-muted">
        Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
      </p>
      <div className="d-flex justify-content-center justify-content-lg-start gap-3">
        <Button variant="success" className="px-4 py-2">
          Order Now
        </Button>
        <Button variant="dark" className="px-4 py-2">
          Watch Video <span className="ms-1">▶️</span>
        </Button>
      </div>
    </Col>

    {/* Image Section */}
    <Col xs={12} lg={6} className="position-relative d-flex justify-content-center">
      {/* Green Circle */}
      <div
        style={{
          width: "80%", // Circle width responsive to screen size
          maxWidth: "400px",
          aspectRatio: "1/1",
          backgroundColor: "#00d84c",
          borderRadius: "50%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Central Image */}
        <Image
          src={image1} // Replace with the actual image path
          alt="Food"
          style={{
            width: "140%", // Increased size for larger image
            height: "auto",
            position: "absolute",
            top: "50%",
            left: "25%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Hot Spicy Food Badge */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          color: "#ff0000",
          padding: "5px 10px",
          borderRadius: "20px",
          fontSize: "14px",
          fontWeight: "bold",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        🌶️ Hot Spicy Food
      </div>

      {/* Product Cards */}
      <div
        className="d-flex flex-wrap justify-content-center gap-3 "
        style={{ position: "absolute", bottom: "-20%" }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            width: "120px",
          }}
        >
          <Image
            src={food1} // Replace with the actual image path
            alt="Spicy Noodles"
            style={{ width: "80px", borderRadius: "50%", height: "70px" }}
          />
          <p className="mb-0 fw-bold">Spicy Noodles</p>
          <p className="mb-0" style={{ color: "#999" }}>$18.00</p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            width: "120px",
          }}
        >
          <Image
            src={food2} // Replace with the actual image path
            alt="Vegetarian Salad"
            style={{ width: "80px", borderRadius: "50%" }}
          />
          <p className="mb-0 fw-bold">Vegetarian Salad</p>
          <p className="mb-0" style={{ color: "#999" }}>$23.00</p>
        </div>
      </div>
    </Col>
  </Row>
</Container>
     

      {/* Popular Categories */}
      <Container className="main text-center my-5 mt-5" style={{top:"30px"}}>
        <h5 className="text-danger fw-bold">CUSTOMER FAVORITES</h5>
        <h2 className="fw-bold mb-4">Popular Categories</h2>
        <Row className="justify-content-center gap-0">
          {[
            { title: "Main Dish", count: "86 dishes", img: cat1 },
            { title: "Break Fast", count: "12 break fast", img: cat2},
            { title: "Dessert", count: "48 dessert", img: cat3},
            { title: "Browse All", count: "255 items", img: cat4 },
          ].map((cat, index) => (
            <Col xs={6} md={3} key={index} className="d-flex justify-content-center">
              <Card className="text-center border-1 shadow-sm p-1 shade-one mt-3">
                <div className="d-flex justify-content-center">
                  <Image
                    src={cat.img}
                    roundedCircle
                    style={{ width: "70px", height: "70px" , backgroundColor:"skyblue"}}
                    className="categories"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">{cat.title}</Card.Title>
                  <Card.Text className="text-muted">{cat.count}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Special Dishes */}
      <Container className="my-5 mt-5">
        <h5 className="text-danger fw-bold">SPECIAL DISHES</h5>
        <h2 className="fw-bold mb-4">Standout Dishes From Our Menu</h2>
        <Row className="g-4 justify-content-center">
          {[
            { name: "Fattoush Salad", price: "$24.00", rating: "4.9", img: dish1 },
            { name: "Vegetable Salad", price: "$26.00", rating: "4.6", img: dish2 },
            { name: "Egg Vegi Salad", price: "$23.00", rating: "4.5", img: dish3 },
          ].map((dish, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className="p-3 text-center shadow-sm rounded border-1 shades">
                <div className="position-relative mb-3 d-flex justify-content-center">
                  <Image
                    src={dish.img}
                    roundedCircle
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute"
                    style={{ top: "0", right: "0", color: "#00d84c" }}
                  >
                    
                  </div>
                </div>
                <Card.Title className="fw-bold">{dish.name}</Card.Title>
                <Card.Text className="text-muted">Description of the item</Card.Text>
                <div className="fw-bold text-success">{dish.price}</div>
                <div className="text-warning">★ {dish.rating}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

     {/* Testimonials Section */}
     <Container className="my-5 py-5">
  <Row className="align-items-center">
    {/* Left Section - Image */}
    <Col xs={12} md={6} className="text-center position-relative">
      <div
        className="chef-circle"
        style={{
          width: "300px", // Adjusted for mobile
          height: "300px",
          backgroundColor: "#00d84c",
          borderRadius: "50%",
          position: "relative",
          margin: "0 auto", // Center alignment for mobile
        }}
      ></div>
      <Image
        src={chef} // Replace with valid imported image
        alt="Chef Image"
  
        className="chef-image position-absolute"
        style={{
          width: "300px", // Larger size for better visibility
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          objectFit: "cover", // Ensures the image doesn't cut off
        }}
      />
      {/* Badge */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "white",
          borderRadius: "20px",
          padding: "5px 15px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        Our Best Chef 🏆
      </div>
    </Col>

    {/* Right Section - Text */}
    <Col xs={12} md={6}>
      <h5 className="text-danger fw-bold">TESTIMONIALS</h5>
      <h2 className="fw-bold">What Our Customers Say About Us</h2>
      <p className="text-muted">
        "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience!
        The attention to detail in presentation and service was impeccable."
      </p>
      {/* Customer Feedback */}
      <div className="d-flex align-items-center gap-3">
        {/* Customer Images */}
        <div className="d-flex">
          {[clientOne, clientTwo, clientOne].map((img, index) => (
            <Image
              key={index}
              src={img} // Replace with actual customer images
              roundedCircle
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                border: "2px solid white",
                marginLeft: index === 0 ? "0" : "-15px",
              }}
            />
          ))}
        </div>
        {/* Rating and Reviews */}
        <div>
          <div className="fw-bold">Customer Feedback</div>
          <div className="text-warning d-flex align-items-center">
            ★ 4.9
            <span className="text-muted ms-2">(18.6k Reviews)</span>
          </div>
        </div>
      </div>
    </Col>
  </Row>
</Container>

{/* last section */}
<Container className="my-5 py-5 mt-5">
      {/* Top Section */}
      <Row className="align-items-center mt-5">
        <Col md={6} className="text-md-start text-center">
          <h6 className="text-danger fw-bold">OUR STORY & SERVICES</h6>
          <h2 className="fw-bold">Our Culinary Journey And Services</h2>
          <p className="text-muted">
            Rooted in passion, we curate unforgettable dining experiences and offer exceptional services,
            blending culinary artistry with warm hospitality.
          </p>
          <Button variant="success" className="px-4 py-2 fw-bold">
            Explore
          </Button>
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-centera mt-5">
          <Row className="g-3">
            {[
              {
                title: "CATERING",
                description: "Delight your guests with our flavors and presentation",
                icon: "🍽️", // Replace with your icon if needed
              },
              {
                title: "FAST DELIVERY",
                description: "We deliver your order promptly to your door",
                icon: "🚚",
              },
              {
                title: "ONLINE ORDERING",
                description: "Explore menu & order with ease using our Online Ordering",
                icon: "📱",
              },
              {
                title: "GIFT CARDS",
                description: "Give the gift of exceptional dining with Foodi Gift Cards",
                icon: "🎁",
              },
            ].map((service, index) => (
              <Col xs={6} key={index}>
                <Card
                  className="shadow-sm text-center p-3 border-0"
                  style={{
                    borderRadius: "15px",
                    height: "100%",
                  }}
                >
                  <div className="text-success" style={{ fontSize: "2rem" }}>
                    {service.icon}
                  </div>
                  <h5 className="fw-bold mt-3">{service.title}</h5>
                  <p className="text-muted">{service.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Bottom Section */}
      <Row className="mt-5">
        <Col md={3} className="text-center text-md-start">
          <h5 className="fw-bold">FOODI</h5>
          <p className="text-muted">
            Savor the artistry where every dish is a culinary masterpiece.
          </p>
          {/* Social Media Icons */}
          <div className="d-flex justify-content-center justify-content-md-start gap-2">
            {["facebook", "instagram", "twitter", "linkedin"].map((platform, index) => (
              <Button
                key={index}
                variant="light"
                className="rounded-circle p-2"
                style={{ border: "1px solid #ddd" }}
              >
                <i className={`bi bi-${platform}`}></i>
              </Button>
            ))}
          </div>
        </Col>
        <Col md={3}>
          <h6 className="fw-bold">Useful Links</h6>
          <ul className="list-unstyled">
            {["About us", "Events", "Blogs", "FAQ"].map((link, index) => (
              <li key={index} className="text-muted">
                {link}
              </li>
            ))}
          </ul>
        </Col>
        <Col md={3}>
          <h6 className="fw-bold">Main Menu</h6>
          <ul className="list-unstyled">
            {["Home", "Offers", "Menus", "Reservation"].map((link, index) => (
              <li key={index} className="text-muted">
                {link}
              </li>
            ))}
          </ul>
        </Col>
        <Col md={3}>
          <h6 className="fw-bold">Contact Us</h6>
          <ul className="list-unstyled">
            <li className="text-muted">example@email.com</li>
            <li className="text-muted">+64 958 248 966</li>
            <li className="text-muted">Social media</li>
          </ul>
        </Col>
      </Row>

      {/* Footer */}
      <Row className="mt-4">
        <Col className="text-center text-muted">
          Copyright © 2023 Dcode | All rights reserved
        </Col>
      </Row>
    </Container>
  



    </>
  );
};

export default FoodSection;
