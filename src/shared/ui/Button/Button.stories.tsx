import { ComponentMeta, ComponentStory } from '@storybook/react';
import { combineThemes, fillStories, storiesMixer } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeCombiner';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: 'Text',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const itemsNames = [
  'Primary',
  'Clear',
  'ClearInverted',
  'Outline',
  'OutlineSizeL',
  'OutlineSizeXL',
  'Background',
  'BackgroundInverted',
  'Square',
  'SquareSizeL',
  'SquareSizeXL',
  'Disabled',
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
stories.Clear.args = {
  theme: ButtonTheme.CLEAR,
};
stories.ClearInverted.args = {
  theme: ButtonTheme.CLEAR_INVERTED,
};
stories.Outline.args = {
  theme: ButtonTheme.OUTLINE,
};
stories.OutlineSizeL.args = {
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};
stories.OutlineSizeXL.args = {
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
};
stories.Background.args = {
  theme: ButtonTheme.BACKGROUND,
};
stories.BackgroundInverted.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
stories.Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
};
stories.SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
};
stories.SquareSizeXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
};
stories.Disabled.args = {
  children: '>',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
};

combineThemes({
  stories,
  themesNames,
});

export const {
  Primary,
  PrimaryDark,
  Clear,
  ClearDark,
  ClearInverted,
  ClearInvertedDark,
  Outline,
  OutlineDark,
  OutlineSizeL,
  OutlineSizeLDark,
  OutlineSizeXL,
  OutlineSizeXLDark,
  Background,
  BackgroundDark,
  BackgroundInverted,
  BackgroundInvertedDark,
  Square,
  SquareDark,
  SquareSizeL,
  SquareSizeLDark,
  SquareSizeXL,
  SquareSizeXLDark,
  Disabled,
  DisabledDark,
} = stories;
