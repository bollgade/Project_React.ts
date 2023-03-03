import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

const elements: Record<string, any> = {
  Primary: Template.bind({}),
  onlyTitle: Template.bind({}),
  onlyText: Template.bind({}),
  Error: Template.bind({}),
};

elements.Primary.args = {
  title: 'Title lorem ipsum',
  text: 'I have no idea what to write else',
};

elements.onlyTitle.args = {
  title: 'Title lorem ipsum',
};

elements.onlyText.args = {
  text: 'I have no idea what to write else',
};

elements.Error.args = {
  title: 'Title lorem ipsum',
  text: 'I have no idea what to write else',
  theme: TextTheme.ERROR,
};

Object.keys(elements).forEach((key) => {
  elements[`${key}Dark`] = { ...elements[key] };
  elements[`${key}Dark`].decorators = [ThemeDecorator(Theme.DARK)];
});

export const {
  Primary,
  PrimaryDark,
  onlyTitle,
  onlyTitleDark,
  onlyText,
  onlyTextDark,
  Error,
  ErrorDark,
} = elements;
