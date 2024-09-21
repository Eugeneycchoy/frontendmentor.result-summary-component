import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/css/index.css';
import ScoreCard from '../src/ScoreCard.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScoreCard />
  </StrictMode>
);
