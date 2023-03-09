import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { combineThemes, fillStories, storiesMixer } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeCombiner';
import { Navbar } from './Navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

const itemsNames = [
  'Primary',
  'Auth',
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

stories.Primary.decorators = [StoreDecorator({})];
stories.Auth.decorators = [StoreDecorator({
  user: { authData: {} },
})];

combineThemes({
  stories,
  themesNames,
});

export const {
  Primary,
  PrimaryDark,
  Auth,
  AuthDark,
} = stories;
