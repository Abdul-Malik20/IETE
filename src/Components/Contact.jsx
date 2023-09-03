import React from "react";
import { Container, Row, Col } from "react-bootstrap";



export default function Contact() {


  return (
    <Container>

      <Row className="mb-5 mt-3" >
        <Col lg="8">
          <h1 className="display-4 mb-4"><strong>Contact Us</strong></h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp" style={{border:'1px solid black'}}>
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4"><strong>Get in touch</strong></h3>
          <address>
            <strong>Email:</strong>{" "}
            <a href="mailto:ietechennai@gmail.com" className="linh">ietechennai@gmail.com
            </a>
            <br />
            <br />
            <p>
              <strong>Phone: </strong>044 2835 0773
            </p>
            <p>
              <strong>Location:  </strong>IETE Chennai centre, No: 37,
              Conran Smith Road Entrance Peters Road,
              Gopalapuram,Chennai,
              Tamil Nadu 600086
            </p>
          </address>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form className="contact__form w-100">
            <Row>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </Col>
            </Row>
            <br />
            <textarea
              className="form-control rounded-0"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              required
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button className="btn ac_btn" type="submit" style={{border:'1px solid black'}}>
                  Send
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
      
    </Container>
  );
}