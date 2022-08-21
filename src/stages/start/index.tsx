import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import BrandTitle, { Title } from '../../components/BrandTitle';

const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;

  .sub-title {
    margin-top: 2rem;
    font-size: 2rem;
  }

  .speaker {
    margin-top: 1rem;
    color: #666;
    font-size: 1rem;
  }

  ${Title} {
    cursor: pointer;
  }
`;

export default function Start() {
  const navigate = useNavigate();

  const handleBrandClick = useCallback(() => {
    navigate('/what-i-want');
  }, [navigate]);

  return (
    <StartWrapper>
      <BrandTitle onClick={handleBrandClick} />
      <div className="sub-title">实践分享</div>
      <span className="speaker"> —— 沈关林</span>
    </StartWrapper>
  );
}
