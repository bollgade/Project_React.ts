import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

const elements: Record<string, any> = {
  Primary: Template.bind({}),
  withError: Template.bind({}),
  Loading: Template.bind({}),
};
elements.Primary.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'asd' },
})];

elements.withError.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'asd', error: 'error' },
})];

elements.Loading.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'asd', isLoading: true },
})];

Object.keys(elements).forEach((key) => {
  elements[`${key}Dark`] = { ...elements[key] };
  elements[`${key}Dark`].decorators = [...elements[key].decorators, ThemeDecorator(Theme.DARK)];
});

export const {
  Primary,
  PrimaryDark,
  withError,
  withErrorDark,
  Loading,
  LoadingDark,
} = elements;
