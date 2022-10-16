import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import Login from '@/pages/Login';

const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default memo(Navigation);
