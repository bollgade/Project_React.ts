import { ComponentMeta, ComponentStory } from '@storybook/react';
import { combineThemes, fillStories, storiesMixer } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeCombiner';
import AboutPage from './AboutPage';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

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

combineThemes({
  stories,
  themesNames,
});

export const {
  Primary,
  PrimaryDark,
} = stories;
