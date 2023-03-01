import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    placeholder: 'Username',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const LightWithValue = Template.bind({});
LightWithValue.args = {
  value: 'My UserName',
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkWithValue = Template.bind({});
DarkWithValue.args = {
  value: 'My UserName',
};
DarkWithValue.decorators = [ThemeDecorator(Theme.DARK)];
