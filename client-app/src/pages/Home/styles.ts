import styled from 'styled-components';
import { shade } from 'polished';
import colors from '../../utils/colors';

export const Grid = styled.div`
  display: inline-grid;
  @media (min-width: 1301px) {
    grid-template-columns: auto auto auto auto;
  }
  @media (max-width: 1300px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 899px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 520px) {
    grid-template-columns: auto;
  }
  margin: 0 1rem;
  grid-gap: 4.5rem;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Card = styled.div`
  max-width: 44.75rem;
  margin-top: 1.75rem;

  a {
    background: ${colors.white};
    border-radius: 0.3125rem;
    width: 98%;
    padding: 1.8rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: transform 0.2s;
    &:hover {
      transform: translateX(0.625rem);
    }
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
      p {
        font-size: 1.125rem;
        color: ${colors.gray};
        margin-top: 0.25rem;
      }
    }
  }
`;
