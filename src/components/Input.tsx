import { memo, useContext } from 'react';
import styled from 'styled-components';

export type IInput = React.InputHTMLAttributes<HTMLInputElement>;
const StyledInput = styled.input`
  border: 1px solid var(--color);
`;
const Input = ({ ...inputProps }: IInput) => {
  return <StyledInput {...inputProps} />;
};

export default memo(Input);
