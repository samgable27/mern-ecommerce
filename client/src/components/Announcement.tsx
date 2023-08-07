import React from "react";
import { styled } from "styled-components";

interface AnnouncementProps {}

const Container = styled.div`
  height: 40px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement: React.FC<AnnouncementProps> = () => {
  return <Container>Free shipping for over $50!</Container>;
};

export default Announcement;
