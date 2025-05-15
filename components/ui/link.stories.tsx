import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./link";

const ExampleTarget = () => (
  <div id="example-target" style={{ marginTop: '500px', padding: '20px', background: '#f0f0f0' }}>
    Target Element
  </div>
);

const meta: Meta<typeof Link> = {
  title: "Components/ui/Link",
  component: Link,
  parameters: {
    layout: "padded",
  },
  args: {
    children: "Scroll to Target",
    targetId: "example-target",
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
    targetId: {
      control: "text",
      description: "ID of the target element to scroll to",
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <ExampleTarget />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
    args: {
        variant: "default",
        children: "Scroll to Element",
        size: "default",
    }
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
        children: "Scroll to Element",
    }
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Scroll Link",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Scroll Link",
  },
};

export const Underlined: Story = {
  args: {
    variant: "underline",
    children: "Underlined Scroll Link",
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
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
        Scroll Down
      </>
    ),
  },
};
