import { ComponentMeta, ComponentStory } from '@storybook/react';
import { combineThemes, fillStories, storiesMixer } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeCombiner';
import { Sidebar } from './Sidebar';

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

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
