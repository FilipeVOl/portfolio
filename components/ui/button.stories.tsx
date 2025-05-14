import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  title: "Components/ui/button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: action("clicked"),
  },
  argTypes: {
    variant: {
      control: "select",
      description: "Button variants",
      options: ["default", "secondary", "outline"],
    },
    size: {
        control: 'select',
        description: 'Button sizes',
        options: ['sm', 'md', 'lg', 'icon'],
    },
    disabled: {
        control: 'boolean',
    },
    onClick: {
        action: 'clicked',
        description: 'Function called when the button is clicked',
    },
    children: {
        control: 'text',
        description: 'Content to be displayed inside the button',
    },
    className: {
        control: 'text',
        description: 'Additional CSS classes to be applied to the button',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "sm",
    disabled: false,
    onClick: action("clicked"),
    children: "Default button",
    className: "shadow-lg",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "sm",
    disabled: false,
    onClick: action("clicked"),
    children: "Secondary button",
    className: "shadow-lg",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "sm",
    disabled: false,
    onClick: action("clicked"),
    children: "Outline button",
  },
};
