import React, { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { StageProvider } from './components/Stage';
import { Theme } from './enums/theme.enum';
import GlobalStyle from './GlobalStyle';
import useStorage from './hooks/useStorage';
import BasicLayout from './partial/BasicLayout';
import stages from './stages';
import Start from './stages/start';
import * as themes from './themes';

export default function App() {
  const [currentTheme = Theme.Ukraine, setTheme] = useStorage('theme', Theme.Ukraine);

  const handleThemeChange = useCallback(
    (e: CustomEvent) => {
      setTheme(e.detail);
    },
    [setTheme],
  );

  useEffect(() => {
    document.addEventListener('theme-change', handleThemeChange as EventListener);

    return () => {
      document.removeEventListener('theme-change', handleThemeChange as EventListener);
    };
  }, [handleThemeChange]);

  return (
    // eslint-disable-next-line import/namespace
    <ThemeProvider theme={themes[currentTheme]}>
      {/* eslint-disable-next-line import/namespace */}
      <GlobalStyle theme={themes[currentTheme]} />
      <StageProvider>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route element={<BasicLayout />}>
            {stages.map(({ path, component }) => {
              const Comp = component;
              // @ts-ignore
              const comp = React.isValidElement(component) ? Comp : <Comp />;
              return <Route key={path} path={path} element={comp as React.ReactElement} />;
            })}
          </Route>
          <Route path="/*" element={<div>404</div>} />
        </Routes>
      </StageProvider>
    </ThemeProvider>
  );
}
