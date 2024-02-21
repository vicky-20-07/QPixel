import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

export default function HelpAndSupport() {
  return (
    <Wrapper>
        <Header />
      <Container>
        <p>HELP AND SUPPORT</p>
      </Container>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div `
    background-color: black;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
`

const Container = styled.div`
    background-color: white;
    width: 70%;
    margin: 50px 0;
    margin-left: 50%;
    transform: translate(-50%);
`