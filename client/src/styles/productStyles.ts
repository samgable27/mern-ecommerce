import { styled } from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

export const ProductContainer = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
    border-radius: 30px;
  }
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;

export const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
