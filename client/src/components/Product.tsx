import React from "react";
import { ProductProps } from "../types/styledTypes";
import {
  Circle,
  Icon,
  Image,
  Info,
  ProductContainer,
} from "../styles/productStyles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Product: React.FC<ProductProps> = ({ item }) => {
  return (
    <ProductContainer>
      <Circle />
      <Image src={item?.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </ProductContainer>
  );
};

export default Product;
