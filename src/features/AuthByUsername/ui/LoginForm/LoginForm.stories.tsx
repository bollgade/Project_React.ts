import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { combineThemes, fillStories, storiesMixer } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeCombiner';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

const itemsNames = [
  'Primary',
  'withError',
  'Loading',
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

stories.Primary.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'asd' },
})];

stories.withError.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'asd', error: 'error' },
})];

stories.Loading.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'asd', isLoading: true },
})];

combineThemes({
  stories,
  themesNames,
});

export const {
  Primary,
  PrimaryDark,
  withError,
  withErrorDark,
  Loading,
  LoadingDark,
} = stories;
