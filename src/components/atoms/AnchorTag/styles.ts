import styled from 'styled-components';

export const Anchor = styled.a`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    color: var(--secondary-color);
  }

  > svg {
    margin: 0 4px;
  }
`;
