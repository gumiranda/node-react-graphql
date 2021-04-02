import styled from 'styled-components';
import { shade } from 'polished';
import colors from '../../utils/colors';

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
  color: ${colors.white};
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
    color: ${colors.gray};
    &::placeholder {
      color: ${colors.lightGray};
    }
  }
  button {
    width: 13.125rem;
    height: 3.375rem;
    background: ${colors.green};
    border-radius: 0 0.3125rem 0.3125rem 0;
    color: ${colors.white};
    border: 0;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, colors.green)};
    }
  }
`;
export const Cards = styled.div`
  margin-top: 5rem;
  max-width: 43.75rem;
  a {
    background: ${colors.white};
    border-radius: 0.3125rem;
    width: 35%;
    padding: 1.5rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      width: 12.5rem;
      height: 12.5rem;
      border-radius: 0.3125rem;
    }
    div {
      margin-top: 1rem;
      align-self: flex-start;
      strong {
        font-size: 1.25rem;
        color: ${colors.darkBlueShade};
      }
    }
  }
`;
