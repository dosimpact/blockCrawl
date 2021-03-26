import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import Section from "../components/Section";

const Container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 800px;
  height: 500px;
  & > div {
    font-size: 20px;
    font-weight: 600;
  }
  & .Profile__Box {
    width: 100%;
    height: 100%;
  }
  & .Profile__logo {
    margin: 20px;
    padding: 20px;
    width: 60%;
  }
`;

const Content = styled.div``;

function Contact() {
  toast.dark("Feel Free to Contact 😍");

  return (
    <Container>
      <Wrapper>
        <Section className="Profile__Box" name="Profile">
          <Content>Name : Kim Do Young</Content>
          <Content>Email : ypd03008@gmail.com</Content>
          <Section className="Profile__logo" name="Contact Us">
            <img alt="logoImg" src={"logo.png"}></img>
          </Section>
        </Section>
      </Wrapper>
    </Container>
  );
}

export default Contact;
