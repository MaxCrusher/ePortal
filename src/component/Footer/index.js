import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Aladdin from "../../img/aladdin.jpg";
import Surtel from '../../img/surtel.png';
import Infotecs from "../../img/infotecs.jpg";
import "./index.css";

class Footer extends Component {
  render = () => (
    <footer>
      <div className="content-footer">
        <Container className="height-100">
          <Row className="height-100 pt-30">
            <Col lg={3} md={6} sm={12} className="height-100">
              <div className="footer-items">
                <div className="footer-item">
                  © 2002—2019 «Электронный портал» 644023, Омск, ул. 17-я
                  Рабочая, 101в.
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="height-100">
              <div className="footer-items">
                <div className="footer-item">
                ТЕХНИЧЕСКАЯ ПОДДЕРЖКА
                  <a href="tel:+">(3812) 905-095</a> 
                  <a href="tel:+">+7 913 633 7955</a>
                  <a href="tel:+">+7 913 633 7959</a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="height-100">
              <div className="footer-items">
                <div className="footer-item">
                  ОТДЕЛ ПРОДАЖ
                  <a href="tel:+">(3812) 910-777</a> 
                  <a href="tel:+">+7 913 155 6683</a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="height-100">
              <div className="footer-items">
                <div className="footer-item">
                  УДОСТОВЕРЯЮЩИЙ ЦЕНТР
                  <a href="tel:+">(3812) 905-145</a> 
                  <a href="tel:+">+7 913 155 6684</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
export default Footer;
