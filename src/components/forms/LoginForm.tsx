import { memo, useCallback } from 'react';
import { SignInDto } from '@/models/auth';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import Input from '../Input';
import styled from 'styled-components';
import FormErrorLabel from '../FormErrorLabel';
import FormLabel from '../FormLabel';

export type ILoginFormInputs = SignInDto;

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

interface ILoginForm {
  onSubmit: (data: ILoginFormInputs) => void;
}

const StyledLoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledLoginButton = styled(Button)`
  margin-top: 50px;
  font-size: 16px;
  transition: all 0.2s;
  position: relative;
  width: 100%;
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 1;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transition: all 0.5s;
    background-color: var(--font-color-primary_low-shadow);
    pointer-events: none;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 5px 20px 10px 0px var(--font-color-primary_shadow);
  }
  &:hover::before {
    opacity: 0;
    transform: scale(1.7, 1.7);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 2px 10px 5px 0px var(--font-color-primary_shadow);
  }
`;

const StyledLoginInput = styled(Input)`
  margin-top: 5px;
`;

const StyledFormLabel = styled(FormLabel)`
  &:not(:first-child) {
    margin-top: 50px;
  }
`;

const LoginForm = ({ onSubmit }: ILoginForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = useCallback(
    (data: ILoginFormInputs) => {
      onSubmit(data);
    },
    [errors]
  );

  return (
    <StyledLoginForm onSubmit={handleSubmit(handleSubmitForm)}>
      <StyledFormLabel>Email:</StyledFormLabel>
      <StyledLoginInput />
      <FormErrorLabel htmlFor="email">{errors.email?.message}</FormErrorLabel>
      <StyledFormLabel>Password:</StyledFormLabel>
      <StyledLoginInput />
      <FormErrorLabel htmlFor="password">
        {errors.password?.message}
      </FormErrorLabel>
      <StyledLoginButton type="submit">Sign In</StyledLoginButton>
    </StyledLoginForm>
  );
};

export default memo(LoginForm);
