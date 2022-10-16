import { ThemeContext } from '@/contexts/ThemeContext';
import { Theme } from '@/models/common';
import { memo, useContext } from 'react';
import styled from 'styled-components';
import Button from './Button';

const SwitcherContainer = styled.div`
  margin-top: 50px;
`;

const Switcher = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const handleClick = (mode: Theme) => {
    toggleTheme(mode);
  };
  return (
    <SwitcherContainer>
      <Button onClick={() => handleClick('light')}>light</Button>
      <Button onClick={() => handleClick('auto')}>auto</Button>
      <Button onClick={() => handleClick('dark')}>dark</Button>
    </SwitcherContainer>
  );
};

export default memo(Switcher);
