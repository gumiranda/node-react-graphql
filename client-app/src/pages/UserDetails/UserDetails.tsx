import React from 'react';
import Layout from 'components/Layout/Layout';
import { useParams, useHistory } from 'react-router-dom';
import { useGetUsers } from 'graphql/useRequest';
import colors from 'utils/colors';
import { DualRing } from 'react-spinners-css';
import { Container } from './styles';

const UserDetails: React.FC = () => {
  const history = useHistory();
  const { name }: any = useParams();
  const { data, error, isLoading, isSuccess } = useGetUsers(name);
  const pushToHome = (nameParam) => {
    localStorage.setItem('@nameQuery', nameParam);
    history.push(`/`);
    window.location.reload();
  };
  return (
    <Layout setQueryName={pushToHome}>
      {error && <h1>Something went wrong!</h1>}
      {isLoading && (
        <Container>
          <DualRing color={colors.white} size={50} />
        </Container>
      )}
      {isSuccess && <h1>{data[0].name}</h1>}
    </Layout>
  );
};

export default UserDetails;
