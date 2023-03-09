import { ComponentMeta, ComponentStory } from '@storybook/react';
import { combineThemes, fillStories, storiesMixer } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeCombiner';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: 'Text',
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

const itemsNames = [
  'Primary',
  'Secondary',
  'Red',
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
  theme: AppLinkTheme.PRIMARY,
};
stories.Secondary.args = {
  theme: AppLinkTheme.SECONDARY,
};
stories.Red.args = {
  theme: AppLinkTheme.RED,
};

combineThemes({
  stories,
  themesNames,
});

export const {
  Primary,
  Secondary,
  Red,
  PrimaryDark,
  SecondaryDark,
  RedDark,
} = stories;
