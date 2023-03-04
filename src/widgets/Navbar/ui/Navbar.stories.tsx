import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Navbar } from './Navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

const elements: Record<string, any> = {
  Primary: Template.bind({}),
  Auth: Template.bind({}),
};
elements.Primary.decorators = [StoreDecorator({})];
elements.Auth.decorators = [StoreDecorator({
  user: { authData: {} },
})];

Object.keys(elements).forEach((key) => {
  const mainElement = elements[key];
  const mainDecorators = elements[key].decorators ?? [];
  elements[`${key}Dark`] = { ...mainElement };
  elements[`${key}Dark`].decorators = [...mainDecorators, ThemeDecorator(Theme.DARK)];
});

export const {
  Primary,
  PrimaryDark,
  Auth,
  AuthDark,
} = elements;
