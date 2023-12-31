import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export const ContainerItem = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #2b2a29;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;
