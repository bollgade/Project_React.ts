import { ComponentMeta, ComponentStory } from '@storybook/react';
import { combineThemes, fillStories, storiesMixer } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeCombiner';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

const itemsNames = [
  'Primary',
  'onlyTitle',
  'onlyText',
  'Error',
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
  title: 'Title lorem ipsum',
  text: 'I have no idea what to write else',
};

stories.onlyTitle.args = {
  title: 'Title lorem ipsum',
};

stories.onlyText.args = {
  text: 'I have no idea what to write else',
};

stories.Error.args = {
  title: 'Title lorem ipsum',
  text: 'I have no idea what to write else',
  theme: TextTheme.ERROR,
};

combineThemes({
  stories,
  themesNames,
});

export const {
  Primary,
  PrimaryDark,
  onlyTitle,
  onlyTitleDark,
  onlyText,
  onlyTextDark,
  Error,
  ErrorDark,
} = stories;
