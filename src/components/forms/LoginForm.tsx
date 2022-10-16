import { memo, useCallback } from 'react';
import { SignInDto } from '@/models/auth';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import Input from '../Input';

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
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Input />
      <label htmlFor="email">{errors.email?.message}</label>
      <Input />
      <label htmlFor="password">{errors.password?.message}</label>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default memo(LoginForm);
