import { forwardRef, FC } from "react";
import { Link } from "react-router-dom";
import { usernameRule, passwordRule } from '../rules';
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
} from "antd";
import signinbg from "src/assets/images/img-signin.jpg";
interface iRecipeProps {
  onFinish: any;
  onFinishFailed: any;
  setRemember: any;
}

const MainContent: FC<iRecipeProps> = forwardRef(({
    onFinish,
    onFinishFailed,
    setRemember
}, ref): JSX.Element => {
    const { Title } = Typography;
  return (
    <>
      <Layout className="" style={{height: "100vh"}}>
        <Row justify="space-around" style={{height: "100%"}}>
          <Col
            md={{ span: 12 }}
          >
            <div style={{ padding: 30 }}>
            <Title className="mb-15">Sign In</Title>
            <Title className="font-regular text-muted" level={5}>
              Enter your email and password to sign in
            </Title>
            <Form
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
              className="row-col"
            >
              <Form.Item
                hasFeedback
                className="username"
                label="Email"
                name="email"
                rules={usernameRule}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                className="password"
                label="Password"
                name="password"
                rules={passwordRule}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item
                name="remember"
                className="aligin-center"
                valuePropName="checked"
              >
                <Switch defaultChecked onChange={setRemember}/>
                Remember me
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  SIGN IN
                </Button>
              </Form.Item>
              <p className="font-semibold text-muted">
                Don't have an account?{" "}
                <Link to="/sign-up" className="text-dark font-bold">
                  Sign Up
                </Link>
              </p>
            </Form>
            </div>
          </Col>
          <Col
            className="sign-img"
            style={{ padding: 12, backgroundImage: `url(${signinbg})`, backgroundSize: 'cover' }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
          >
          </Col>
        </Row>
      </Layout>
    </>
  );
});

export default MainContent;