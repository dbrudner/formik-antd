import * as React from "react";
import { withFormik } from "formik";
import * as yup from "yup";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import Warning from "./warning";

const FormItem = Form.Item;

type myFormType = {
  email?: string;
  password?: string;
  remember?: boolean;
};

const InnerForm: React.SFC<{
  values: myFormType;
  errors: myFormType;
  handleSubmit: any;
  handleChange: any;
  touched: any;
}> = ({ errors, handleSubmit, handleChange, values, touched }) => (
  <Form onSubmit={handleSubmit}>
    <FormItem>
      <Input
        onChange={handleChange}
        value={values.email}
        type="email"
        name="email"
        placeholder="Email"
        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
      />
      {errors.email && touched.email && <Warning message={errors.email} />}
    </FormItem>
    <FormItem>
      <Input
        onChange={handleChange}
        value={values.password}
        type="password"
        name="password"
        placeholder="Password"
        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
      />
      {errors.password &&
        touched.password && <Warning message={errors.password} />}
    </FormItem>
    <FormItem>
      <label style={{ cursor: "pointer" }}>
        <Checkbox onChange={handleChange} name="remember" />
        <span style={{ marginLeft: "5px" }}>Remember me</span>
      </label>
      <Button
        style={{ display: "block", width: "100%" }}
        type="primary"
        htmlType="submit"
      >
        Log in
      </Button>
    </FormItem>
  </Form>
);

const MyForm = withFormik<myFormType, myFormType>({
  handleSubmit(values: myFormType) {
    console.log(values);
  },
  mapPropsToValues(props: myFormType) {
    return { email: "" };
  },
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email("That's not an email")
      .required("email is required"),
    password: yup
      .string()
      .min(5, "longer pls")
      .required("password is required")
  }),
  displayName: "Ponent"
})(InnerForm);

export default MyForm;
