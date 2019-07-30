import React, { Component } from "react";
import { Collapse, Typography } from "antd";
import { text } from "./FaqData";

const { Panel } = Collapse;
const { Title } = Typography;

export class Faq extends Component {
  render() {
    return (
      <div>
        <Title>FAQ</Title>
        <Collapse accordion bordered={false} defaultActiveKey={["1"]}>
          {text.map((el, index) => {
            return (
              <Panel key={index} header={el.header}>
                <p>{el.body}</p>
              </Panel>
            );
          })}
        </Collapse>
      </div>
    );
  }
}

export default Faq;
