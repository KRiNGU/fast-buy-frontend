import { forwardRef, memo } from 'react';
import styled from 'styled-components';

export type IInput = React.InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input`
	border: 1px solid var(--color-grey);
	color: var(--font-color-primary);
	width: 100%;
	padding: 10px 15px;
	border-radius: 5px;
	&:hover {
		border-color: var(--color-primary_hover);
	}
	&:focus {
		border-color: var(--color-primary_active);
		box-shadow: 0 0 3px 3px var(--color-primary_shadow);
	}
`;

const Input = forwardRef<HTMLInputElement>(({ ...inputProps }: IInput, ref) => {
	return <StyledInput {...inputProps} ref={ref} />;
});

export default memo(Input);
