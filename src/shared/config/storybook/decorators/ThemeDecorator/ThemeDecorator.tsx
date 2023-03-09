import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  Object.values(Theme).forEach((themeName) => {
    if (document.body.classList.contains(themeName)) {
      document.body.classList.remove(themeName);
    }
  });
  document.body.classList.add(theme);

  return (
    <div className="app">
      <StoryComponent />
    </div>
  );
};

export { Theme as ThemeDecor };
