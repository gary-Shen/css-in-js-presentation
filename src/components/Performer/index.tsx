import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

type Direction = 'horizontal' | 'vertical';

export interface PerformerProps {
  type: 'queuer' | 'replacer';
  queue: React.ReactElement[];
  direction?: Direction;
  className?: string;
}

const StyledPerformer = styled.div.attrs({
  className: 'this-classname-will-always-in-this-div',
})`
  display: flex;
  ${({ direction }) =>
    direction === 'horizontal'
      ? css`
          flex-direction: row;
        `
      : css`
          flex-direction: column;
        `}
`;

// 必须显式地传递className给组件，否则外部styled(Performer)将无效
export default function Performer({ queue, type, direction, className }: PerformerProps) {
  const [presentIndex, updatePresentIndex] = useState(0);

  const handleUpdatePresentForward = useCallback(() => {
    if (presentIndex === queue.length - 1) {
      return;
    }

    updatePresentIndex(presentIndex + 1);
  }, [presentIndex, queue.length]);

  const handleUpdatePresentBackward = useCallback(() => {
    if (presentIndex === 0) {
      return;
    }

    updatePresentIndex(presentIndex - 1);
  }, [presentIndex]);

  useEffect(() => {
    document.addEventListener('next-item', handleUpdatePresentForward);

    return () => {
      document.removeEventListener('next-item', handleUpdatePresentForward);
    };
  }, [handleUpdatePresentForward]);

  useEffect(() => {
    document.addEventListener('prev-item', handleUpdatePresentBackward);

    return () => {
      document.removeEventListener('prev-item', handleUpdatePresentBackward);
    };
  }, [handleUpdatePresentBackward]);

  return (
    <StyledPerformer direction={direction} className={className}>
      {queue.map((component, index) => {
        if (type === 'queuer' && index <= presentIndex) {
          return component;
        }

        if (type === 'replacer' && index === presentIndex) {
          return component;
        }

        return null;
      })}
    </StyledPerformer>
  );
}
