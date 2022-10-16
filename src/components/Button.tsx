import { useContext } from 'react';
import { memo } from 'react';
import styled from 'styled-components';

export type IButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};
const StyledButton = styled.button`
  border: 1px solid #d3d4d8;
  padding: 2px 7px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border-color: #768ce6;
  }
  &:active {
    border-color: #4863cf;
    background-color: #4863cf;
    color: #fff;
    box-shadow: 0 0 2px 2px #4863cf2a;
  }
`;
const Button = ({ children, ...buttonProps }: IButton) => {
  return <StyledButton {...buttonProps}>{children}</StyledButton>;
};

export default memo(Button);
