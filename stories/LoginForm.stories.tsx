import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { LoginForm } from '../app/components/login';

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: 'Components/LoginForm',
};

export default meta;
//making type
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {};

/**
 * Story to test successful form submission
 */
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate user typing a valid email
    await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
    
    await userEvent.type(canvas.getByTestId('password'), 'a-random-password');
    
    // Simulate form submission
    await userEvent.click(canvas.getByRole('button'));

    // Assert success message is displayed
    await expect(
      canvas.getByText('Everything is perfect. Your account is ready and we should probably get you started!')
    ).toBeInTheDocument();
  },
};

/**
 * Story to test form submission with missing email and password
 */
export const ErrorFormEmpty: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate form submission with empty fields
    await userEvent.click(canvas.getByRole('button'));

    // Assert error message is displayed
    await expect(
      canvas.getByText('Please fill in both email and password.')
    ).toBeInTheDocument();
  },
};

/**
 * Story to test form submission with only email filled
 */
export const ErrorFormMissingPassword: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate user typing a valid email
    await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
    
    // Simulate form submission without password
    await userEvent.click(canvas.getByRole('button'));

    // Assert specific error message is displayed
    await expect(
      canvas.getByText('Please fill in both email and password.')
    ).toBeInTheDocument();
  },
};
