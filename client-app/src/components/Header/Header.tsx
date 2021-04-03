import React, { useState, FormEvent } from 'react';
import { Title, Form, Container } from './styles';

const Header: any = ({ setQueryName }: any) => {
  const [name, setName] = useState('');

  const search = (event: FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    setQueryName(name);
  };
  return (
    <Container>
      <Title>MySocial</Title>
      <Form onSubmit={search}>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Type the name of user"
        />
        <button type="submit">Search</button>
      </Form>
    </Container>
  );
};

export default Header;
