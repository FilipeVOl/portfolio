import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./link";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Link> = {
  title: "Components/ui/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Example Link",
    href: "/",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "underline", "icon"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
    args: {
        variant: "default",
        children: "Default Link",
        size: "default",
    }
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
        children: "Secondary Link",
    }
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Link",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Link",
  },
};

export const Underlined: Story = {
  args: {
    variant: "underline",
    children: "Underlined Link",
    className: "text-primary-text"
  },
};

export const WithIcon: Story = {
  args: {
    variant: "icon",
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
          <polyline points="10 17 15 12 10 7" />
          <line x1="15" y1="12" x2="3" y2="12" />
        </svg>
        Link with Icon
      </>
    ),
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "Muted Link",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Link",
  },
};
