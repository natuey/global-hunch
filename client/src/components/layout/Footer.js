import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Icon, Row } from "antd";

class Footer extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Link to="/faq">Frequently Asked Questions</Link>
          </Col>
          <Col className="gutter-row" span={6}>
            <Link to="/privacypolicy">Privacy Policy</Link>
          </Col>
          <Col className="gutter-row" span={6}>
            <a href="http://globalhunch.io/contact.html">Contact Us</a>
          </Col>
          <Col className="gutter-row" span={1}>
            <a href="https://www.facebook.com/globalhunch/">
              <Icon type="facebook" theme="filled" />
            </a>
          </Col>
          <Col className="gutter-row" span={1}>
            <a href="https://twitter.com/globalhunch">
              <Icon type="twitter" />
            </a>
          </Col>
          <Col className="gutter-row" span={1}>
            <a href="https://www.instagram.com/globalhunch/">
              <Icon type="instagram" />
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
