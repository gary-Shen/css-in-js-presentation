import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import stages from '../../stages';

export interface StageProps {
  children: React.ReactNode;
}

export function StageProvider({ children }: StageProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentStageIndex, setStageIndex] = useState(stages.findIndex(({ path }) => path === location.pathname));

  useEffect(() => {
    setStageIndex(stages.findIndex(({ path }) => path === location.pathname));
  }, [location]);

  const handleKeyup = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.key === 'ArrowLeft' && currentStageIndex > 0) {
        navigate(stages[currentStageIndex - 1].path);
        setStageIndex(currentStageIndex - 1);
      } else if (e.key === 'ArrowRight') {
        if (currentStageIndex < stages.length - 1) {
          setStageIndex(currentStageIndex + 1);
          navigate(stages[currentStageIndex + 1].path);
        } else {
          alert('已经是最后一页了，谢谢');
        }
      } else if (e.key === 'ArrowDown') {
        document.dispatchEvent(new CustomEvent('next-item'));
      } else if (e.key === 'ArrowUp') {
        document.dispatchEvent(new CustomEvent('prev-item'));
      }
    },
    [currentStageIndex, navigate],
  );

  useEffect(() => {
    document.addEventListener('keyup', handleKeyup);

    return () => {
      document.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup]);

  return <>{children}</>;
}
