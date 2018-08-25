import * as React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import Form from "./form";
// import { Form as AntForm, Icon, Input, Button, Checkbox } from 'antd';

// const FormItem = AntForm.Item;

const App = () => (
  <div style={{ margin: "20px 50px" }}>
    <h1>Log in</h1>
    <Form />
  </div>
);

render(<App />, document.getElementById("root"));
