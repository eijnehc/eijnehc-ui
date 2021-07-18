import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  color: 'primary',
  variant: 'fill',
  size: 'regular',
  disabled: false,
  loading: false,
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  ...Default.args,
  // icon: DownloadIcon,
};

export const IconRight = Template.bind({});
IconRight.args = {
  ...Default.args,
  // icon: DownloadIcon,
};

const ButtonRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`;

export const Sizes = () => {
  return (
    <>
      <ButtonRow>
        <Button size='large'>Large</Button>
        <Button size='regular'>Default</Button>
        <Button size='small'>Small</Button>
      </ButtonRow>
    </>
  );
};
