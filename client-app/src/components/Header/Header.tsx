import React from 'react';
import { Title, Form, Container } from './styles';

const Header: any = ({ name, setName, setQueryName }: any) => {
  const search = () => {
    setQueryName(name);
  };
  return (
    <Container>
      <Title>MySocial</Title>
      <Form action="">
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Type the name of user"
        />
        <button onClick={search} type="button">
          Search
        </button>
      </Form>
    </Container>
  );
};

export default Header;
