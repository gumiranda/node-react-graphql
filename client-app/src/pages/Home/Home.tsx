/* eslint-disable no-underscore-dangle */
import Layout from 'components/Layout/Layout';
import React, { useState } from 'react';
import { useGetUsers } from 'graphql/useRequest';
// import { useParams } from 'react-router-dom';
import { Card, Grid, Container } from './styles';

const Home: React.FC = () => {
  // const { id } = useParams();
  const [queryName, setQueryName] = useState('');

  const { data, error, isLoading, isSuccess } = useGetUsers(queryName);

  return (
    <Layout setQueryName={setQueryName}>
      {error && <h1>Something went wrong!</h1>}
      {isLoading && <h1>Loading...</h1>}
      {isSuccess && (
        <Container>
          <Grid>
            {data.map((user: User) => (
              <Card>
                <a key={user._id} href={user._id}>
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
