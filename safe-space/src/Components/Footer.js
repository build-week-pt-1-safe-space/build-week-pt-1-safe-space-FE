import React from './node_modules/react';
import styled from './node_modules/styled-components';

const FooterContainer = styled.div`
    border-top: 4px solid #2AB7A8;
    padding: 20px 0 20px 10px;
    margin-top: 20px;
    color: #2AB7A8;
    font-size: 20px;
`

const Footer = props => {
    return(
        <FooterContainer>
            © Safe Space Ltd. All rights reserved.
        </FooterContainer>
    )
}

export default Footer;

