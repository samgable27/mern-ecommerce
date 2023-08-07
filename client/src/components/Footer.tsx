import {
  Center,
  ContactItem,
  Container,
  Description,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from "../styles/footerStyles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ShopSphere.</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae
          accusamus fugiat consequatur, quam asperiores facilis sapiente
          mollitia quasi voluptatibus?
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MapIcon
            style={{
              marginRight: "10px",
            }}
          />
          340 S. Sunset Blvd., Los Angeles, CA
        </ContactItem>
        <ContactItem>
          <PhoneIcon
            style={{
              marginRight: "10px",
            }}
          />
          +1 234 567 8910
        </ContactItem>
        <ContactItem>
          <EmailIcon
            style={{
              marginRight: "10px",
            }}
          />
          contact@shopsphere.com
        </ContactItem>
        <Payment src="https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png" />
      </Right>
    </Container>
  );
};

export default Footer;
