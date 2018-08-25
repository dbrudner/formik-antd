import * as React from "react";
import { Alert } from "antd";

const Warning: React.SFC<any> = ({ message }) => (
  <Alert
    style={{ marginTop: "10px" }}
    message="Log in error"
    description={message}
    type="error"
    showIcon
  />
);

export default Warning;
