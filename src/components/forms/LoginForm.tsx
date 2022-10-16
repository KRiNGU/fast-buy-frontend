import { memo, useCallback } from 'react';
import { SignInDto } from '@/models/auth';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';

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
      <input {...register('email')} />
      <label htmlFor="email">{errors.email?.message}</label>
      <input {...register('password')} />
      <label htmlFor="password">{errors.password?.message}</label>
      <input type="submit" />
    </form>
  );
};

export default memo(LoginForm);
