import Layout from 'components/Layout/Layout';
import React, { useState } from 'react';
import { useGetUsers } from 'graphql/useRequest';
// import { useParams } from 'react-router-dom';
import { Card, Grid } from './styles';

const Home: React.FC = () => {
  // const { id } = useParams();
  const [name, setName] = useState('');
  const [queryName, setQueryName] = useState('');
  console.log(name);
  const { data, error, isLoading, isSuccess } = useGetUsers(queryName);
  console.log(data);
  if (error) return <h1>Something went wrong!</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  return (
    isSuccess && (
      <Layout name={name} setName={setName} setQueryName={setQueryName}>
        <Grid>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
          <Card>
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
          </Card>
        </Grid>
      </Layout>
    )
  );
};

export default Home;
