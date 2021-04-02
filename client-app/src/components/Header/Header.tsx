import React from 'react';
import { Title, Form, Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Title>MySocial</Title>
      <Form action="">
        <input placeholder="Type the name of user" />
        <button type="button">Search</button>
      </Form>
    </Container>
  );
};

export default Header;
