import { FC, useMemo, useState } from 'react';
import { THEME_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import {
  Theme,
  ThemeContext,
} from '../lib/ThemeContext';

const defaultTheme = localStorage
  .getItem(THEME_LOCAL_STORAGE_KEY) as Theme
 || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => {
    document.body.className = theme;
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
