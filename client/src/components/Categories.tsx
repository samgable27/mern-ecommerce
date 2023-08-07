import { Container } from "../styles/categoryStyles";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <Container>
      {categories.map((item, i) => (
        <CategoryItem key={i} item={item} img={""} title={""} id={0} />
      ))}
    </Container>
  );
};

export default Categories;
