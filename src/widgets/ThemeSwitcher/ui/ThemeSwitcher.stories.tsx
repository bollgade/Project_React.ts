import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { IconTheme, ThemeSwitcher } from './ThemeSwitcher';

export default {
  title: 'widget/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  iconTheme: IconTheme.INVERTED,
};

export const Dark = Template.bind({});
Dark.args = {
  iconTheme: IconTheme.INVERTED,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
