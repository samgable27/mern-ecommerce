import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  Container,
  Description,
  Input,
  InputContainer,
  Title,
} from "../styles/letterStyles";

const Newsletter = () => {
  return (
    <Container>
      <Title>Join our Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
