import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  border-top: 4px solid #2ab7a8;
  padding: 20px 0 20px 10px;
  margin-top: 20px;
  color: #2ab7a8;
  font-size: 20px;
`;

const Footer = props => {
  return (
    <FooterContainer>© Safe Space Ltd. All rights reserved.</FooterContainer>
  );
};

export default Footer;