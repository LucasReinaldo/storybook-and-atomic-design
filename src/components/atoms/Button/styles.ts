import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  background: var(--gradient);
  color: var(--primary-color);
  padding: 8px;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  > svg {
    margin-right: 4px;
  }
`;
