import React from 'react';
import styled from 'styled-components';

const Footer = (props) => (
    <FooterContainer> {props.message} </FooterContainer>
)

export default Footer;


const FooterContainer = styled.div`
    background-color: black;
    color: white;
    text-align: center;
    padding: .5em;
    width: 100vw;
    grid-area: footer;
    position: fixed;
    bottom: 0;
`;