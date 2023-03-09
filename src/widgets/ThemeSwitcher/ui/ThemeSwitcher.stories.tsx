import { ComponentMeta, ComponentStory } from '@storybook/react';
import { combineThemes, fillStories, storiesMixer } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeCombiner';
import { IconTheme, ThemeSwitcher } from './ThemeSwitcher';

export default {
  title: 'widget/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

const itemsNames = [
  'Primary',
] as const;

const themesNames = [
  'Dark',
] as const;

type storiesType = storiesMixer<
  typeof itemsNames,
  typeof themesNames,
  typeof Template
>

const stories: storiesType = fillStories({
  itemsNames,
  Template,
});

stories.Primary.args = {
  iconTheme: IconTheme.INVERTED,
};

combineThemes({
  stories,
  themesNames,
});

export const {
  Primary,
  PrimaryDark,
} = stories;
