import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '@/App';
import NotFoundPage from './NotFoundPage';

const Navigation: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default memo(Navigation);
