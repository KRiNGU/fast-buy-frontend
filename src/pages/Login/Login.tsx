import { memo, useCallback, useContext } from 'react';
import LoginForm, { ILoginFormInputs } from '@/components/forms/LoginForm';
import { ThemeContext } from '@/contexts/ThemeContext';
import Button from '@/components/Button';
import { Theme } from '@/models/common';

const Login = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const handleSubmitForm = useCallback((data: ILoginFormInputs) => {
    console.log(data);
  }, []);

  const handleClick = (mode: Theme) => {
    toggleTheme(mode);
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmitForm} />
      <Button onClick={() => handleClick('light')}>light</Button>
      <Button onClick={() => handleClick('auto')}>auto</Button>
      <Button onClick={() => handleClick('dark')}>dark</Button>
    </>
  );
};

export default memo(Login);
