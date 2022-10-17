import { memo, useCallback } from 'react';
import StyledLoginForm, {
	ILoginFormInputs,
} from '@/components/forms/LoginForm';
import Switcher from '@/components/Switcher';
import Container from '@/components/Container';
import styled from 'styled-components';

const LoginPageContainer = styled(Container)`
	background-image: var(--background-login);
	padding: 0 100px;
`;

const LoginContainer = styled.div`
	background-color: var(--container-color-primary);
	height: 600px;
	max-width: 400px;
	width: 100%;
	padding: 20px 40px;
	border-radius: 10px;
	box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.1);
	position: absolute;
	top: 50%;
	left: 100px;
	transform: translateY(-50%);
`;

const StyledH2 = styled.h2`
	text-align: center;
`;

const Login = () => {
	const handleSubmitForm = useCallback((data: ILoginFormInputs) => {
		console.log(data);
	}, []);

	return (
		<LoginPageContainer>
			<LoginContainer>
				<StyledH2>Hello, my friend!</StyledH2>
				<StyledLoginForm onSubmit={handleSubmitForm} />
				<Switcher />
			</LoginContainer>
		</LoginPageContainer>
	);
};

export default memo(Login);
