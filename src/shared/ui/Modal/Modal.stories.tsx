import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsum a doloremque assumenda unde porro culpa. Nam, numquam, qui voluptas nihil officiis et, tempora tempore assumenda quam suscipit magnam nesciunt.',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsum a doloremque assumenda unde porro culpa. Nam, numquam, qui voluptas nihil officiis et, tempora tempore assumenda quam suscipit magnam nesciunt.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
