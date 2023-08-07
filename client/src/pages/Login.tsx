import React from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Link,
  Title,
  Wrapper,
} from "../styles/loginStyles";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Log in</Button>
          <Link>Forgot Password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
