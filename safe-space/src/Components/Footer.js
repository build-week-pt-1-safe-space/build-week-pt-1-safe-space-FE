<<<<<<< HEAD
import React from './node_modules/react';
import styled from './node_modules/styled-components';
=======
import React from "./node_modules/react";
import styled from "./node_modules/styled-components";
>>>>>>> 08f901bb8cad5e4f7669d2fae5d4eb1f19b4a063

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
