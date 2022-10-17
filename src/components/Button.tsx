import { useContext } from 'react';
import { memo } from 'react';
import styled from 'styled-components';

export type IButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};
const StyledButton = styled.button`
  color: #eeeeee;
  background-color: var(--color-primary);
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-primary_hover);
  }
  &:active {
    background-color: var(--color-primary_active);
    box-shadow: 0 0 2px 2px var(--color-primary_shadow);
  }
  &:focus-visible {
    box-shadow: var(--focus-visible);
  }
`;
const Button = ({ children, ...buttonProps }: IButton) => {
  return <StyledButton {...buttonProps}>{children}</StyledButton>;
};

export default memo(Button);
