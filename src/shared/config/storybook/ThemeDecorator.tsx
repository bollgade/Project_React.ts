import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  document.body.className = theme;
  return (
    <div className="app">
      <StoryComponent />
    </div>
  );
};
