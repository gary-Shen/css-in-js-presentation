import { useCallback, useEffect, useRef, useState } from 'react';
import DocumentTitle from 'react-document-title';
import {
  BiDownArrow,
  BiExitFullscreen,
  BiFullscreen,
  BiLeftArrow,
  BiPalette,
  BiRightArrow,
  BiUpArrow,
} from 'react-icons/bi';
import { matchPath, Outlet, useLocation } from 'react-router-dom';

import BrandTitle from '../../components/BrandTitle';
import Select, { Option } from '../../components/Select';
import { Theme } from '../../enums/theme.enum';
import useStorage from '../../hooks/useStorage';
import stages from '../../stages';
import { StyledIcon, Wrapper } from './styled';

function getTitle(pathname: string) {
  for (const { path, name } of stages) {
    const match = matchPath(path, pathname);
    if (match) {
      return name;
    }
  }
}

function ThemeSwitcher() {
  const [theme, updateTheme] = useStorage('theme', Theme.Ukraine);

  const handleThemeChange = useCallback(
    (value: string) => {
      // @ts-ignore
      updateTheme(value as Theme);
      document.dispatchEvent(new CustomEvent('theme-change', { detail: value }));
    },
    [updateTheme],
  );

  return (
    <div>
      <Select onChange={handleThemeChange} value={theme} defaultValue={Theme.Ukraine} title={<BiPalette />}>
        {Object.values(Theme).map((themeItem) => (
          <Option value={themeItem} key={themeItem}>
            {themeItem}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default function BasicLayout() {
  const location = useLocation();
  const title = getTitle(location.pathname) || 'Untitled';

  const [isFull, toggleFull] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const handleToggleFullScreen = useCallback(() => {
    if (!wrapRef.current) {
      return;
    }

    if (document.fullscreenElement) {
      toggleFull(false);
      document.exitFullscreen();
    } else {
      toggleFull(true);
      wrapRef.current.requestFullscreen();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('dblclick', handleToggleFullScreen);

    return () => {
      document.removeEventListener('dblclick', handleToggleFullScreen);
    };
  }, [handleToggleFullScreen]);

  return (
    <DocumentTitle title={title}>
      <Wrapper ref={wrapRef}>
        <div className="header">
          <BrandTitle />
          <ThemeSwitcher />
        </div>
        <div className="content">
          <Outlet />
        </div>
        <div className="toolbar">
          <div className="arrows">
            <StyledIcon>
              <BiLeftArrow />
            </StyledIcon>
            <StyledIcon>
              <BiUpArrow />
            </StyledIcon>
            <StyledIcon>
              <BiRightArrow />
            </StyledIcon>
            <StyledIcon>
              <BiDownArrow />
            </StyledIcon>
          </div>
          <StyledIcon onClick={handleToggleFullScreen}>{isFull ? <BiExitFullscreen /> : <BiFullscreen />}</StyledIcon>
        </div>
      </Wrapper>
    </DocumentTitle>
  );
}
