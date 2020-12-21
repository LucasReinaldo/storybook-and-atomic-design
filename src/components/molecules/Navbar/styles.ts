import styled from 'styled-components';

interface INavProps {
  direction: string;
}

export const Nav = styled.nav<INavProps>`
  flex: 1;
  display: flex;
  position: fixed;
  top: 15px;
  flex-direction: ${({ direction }) =>
    direction === 'vertical' ? 'column' : undefined};

  a {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 1.8rem;
    transition: color 0.2s ease;

    &:hover {
      color: var(--secondary-color);
    }
  }

  a + a {
    margin-left: ${({ direction }) =>
      direction === 'horizontal' ? '24px;' : undefined};

    margin-top: ${({ direction }) =>
      direction === 'vertical' ? 'space-around' : undefined};
  }
`;
