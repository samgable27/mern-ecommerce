import React from "react";
import {
  Button,
  ContainerItem,
  Image,
  Info,
  Title,
} from "../styles/categoryStyles";
import { CategoryProps } from "../types/styledTypes";

const CategoryItem: React.FC<CategoryProps> = ({ item }) => {
  return (
    <ContainerItem>
      <Image src={item?.img} />
      <Info>
        <Title>{item?.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </ContainerItem>
  );
};

export default CategoryItem;
