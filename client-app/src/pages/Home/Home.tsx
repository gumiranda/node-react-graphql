import React from 'react';
import { Title, Form, Container, Cards } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Title>MySocial</Title>
        <Form action="">
          <input placeholder="Type the name of user" />
          <button type="button">Search</button>
        </Form>
      </Container>
      <Cards>
        <a href="test">
          <img
            src="https://i.pravatar.cc/200?u=5f1d7f3e5dc58af42fc39242"
            alt="teste"
          />
          <div>
            <strong>name:fulano</strong>
            <p>age:22</p>
            <p>eyeColor:bar</p>
            <p>company:foo</p>
            <p>email:a@a.com</p>
          </div>
        </a>
      </Cards>
    </>
  );
};

export default Home;
