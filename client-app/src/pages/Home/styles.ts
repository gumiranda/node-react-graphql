import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  @media (max-width: 1080px) {
    flex-direction: row;
  }
  @media (max-width: 469px) {
    flex-direction: column;
  }
`;
export const Title = styled.h1`
  font-size: 3rem;
  margin-top: 2.5rem;
  margin-right: 1rem;
  color: #fff;
  margin-left: 1rem;
  line-height: 3.5rem;
`;
export const Form = styled.form`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 2.5rem;
  max-width: 43.75rem;
  display: flex;
  input {
    flex: 1;
    height: 3.375rem;
    padding: 0 1.5rem;
    border: 0;
    border-radius: 0.3125rem 0 0 0.3125rem;
    color:#3a3a3a;
    &::placeholder {
      color:#a8a8b3;
    }
  }
  button {
    width: 13.125rem;
    height: 3.375rem;
    background: #04d361;
    border-radius: 0 0.3125rem 0.3125rem 0;
    color: #fff;
    border: 0;
    font-weight: bold;
    transition:background-color:0.2s;
     &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
