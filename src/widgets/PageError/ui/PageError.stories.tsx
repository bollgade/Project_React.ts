import { ComponentMeta, ComponentStory } from '@storybook/react';
import { combineThemes, fillStories, storiesMixer } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeCombiner';
import { PageError } from './PageError';

export default {
  title: 'widget/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

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

stories.Primary.args = {};

combineThemes({
  stories,
  themesNames,
});

export const {
  Primary,
  PrimaryDark,
} = stories;
