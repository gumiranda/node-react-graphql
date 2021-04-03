/* eslint-disable no-underscore-dangle */
import Layout from 'components/Layout/Layout';
import React, { useState, useEffect } from 'react';
import { useGetUsers } from 'graphql/useRequest';
import { useParams } from 'react-router-dom';
import colors from 'utils/colors';
import { DualRing } from 'react-spinners-css';
import { Card, Grid, Container } from './styles';

const Home: React.FC = () => {
  const [queryName, setQueryName] = useState('');
  const { data, error, isLoading, isSuccess } = useGetUsers(queryName);
  useEffect(() => {
    const nameQuery = localStorage.getItem('@nameQuery');
    if (nameQuery) {
      setQueryName(nameQuery);
    }
    () => {
      localStorage.removeItem('@nameQuery');
    };
  }, []);
  return (
    <Layout setQueryName={setQueryName}>
      {error && <h1>Something went wrong!</h1>}
      {isLoading && (
        <Container>
          <DualRing color={colors.white} size={50} />
        </Container>
      )}
      {isSuccess && (
        <Container>
          <Grid>
            {data.map((user: User) => (
              <Card>
                <a
                  key={user._id}
                  href={`user-details/${user.name}/${user._id}`}
                >
                  <img src={user.picture} alt={user.name} />
                  <div>
                    <strong>name: {user.name}</strong>
                    <p>age: {user.age}</p>
                    <p>eyeColor: {user.eyeColor}</p>
                    <p>company: {user.company}</p>
                    <p>email: {user.email}</p>
                  </div>
                </a>
              </Card>
            ))}
          </Grid>
        </Container>
      )}
    </Layout>
  );
};
interface User {
  _id: string;
  index: number;
  age: number;
  picture: string;
  eyeColor: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  greeting: string;
  friends: User[];
}
export default Home;
