import { ComponentMeta, ComponentStory } from '@storybook/react';
import { combineThemes, fillStories, storiesMixer } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeCombiner';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;
const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;
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
