import { memo, useCallback } from 'react';
import LoginForm, { ILoginFormInputs } from '@/components/forms/LoginForm';

const Login = () => {
  const handleSubmitForm = useCallback((data: ILoginFormInputs) => {
    console.log(data);
  }, []);

  return <LoginForm onSubmit={handleSubmitForm} />;
};

export default memo(Login);
