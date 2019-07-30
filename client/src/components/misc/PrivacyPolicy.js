import React, { Component } from "react";
import { Collapse } from "antd";
import { text } from "./PrivacyPolicyData";

const { Panel } = Collapse;

export class PrivacyPolicy extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>
            <span>
              <strong>Privacy Policy</strong>
            </span>
          </h1>
          <p>
            <strong>Global Hunch</strong> is committed to providing quality
            services to you and this policy outlines our ongoing obligations to
            you in respect of how we manage your Personal Information.
          </p>
          <p>
            We have adopted the Australian Privacy Principles (APPs) contained
            in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the
            way in which we collect, use, disclose, store, secure and dispose of
            your Personal Information.
          </p>
          <p>
            A copy of the Australian Privacy Principles may be obtained from the
            website of The Office of the Australian Information Commissioner at
            www.aoic.gov.au
          </p>
        </div>
        <div>
          <Collapse accordion bordered={false} defaultActiveKey={["0"]}>
            {text.map((p, index) => {
              return (
                <Panel header={p.header} key={index}>
                  <p>{p.body}</p>
                </Panel>
              );
            })}
          </Collapse>
        </div>
      </div>
    );
  }
}

export default PrivacyPolicy;
