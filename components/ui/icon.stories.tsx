import type { Meta, StoryObj } from "@storybook/react"
import { Icon } from "./icon"
import { Github, Instagram, Linkedin } from "lucide-react"
import { action } from "@storybook/addon-actions"

const meta: Meta<typeof Icon> = {
  title: "Components/ui/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  args: {
    icon: Github,
    onClick: action("clicked"),
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "destructive", "ghost"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
    href: {
      control: "text",
    },
    onClick: {
      action: "clicked",
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {}

export const Primary: Story = {
  args: {
    variant: "primary",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
  },
}

// Example showing different icons
export const IconSet: Story = {
  render: () => (
    <div className="flex gap-4">
      <Icon icon={Github} onClick={action("Github clicked")} />
      <Icon icon={Instagram} onClick={action("Instagram clicked")} />
      <Icon icon={Linkedin} onClick={action("Linkedin clicked")} />
    </div>
  ),
}

// Example showing all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Icon icon={Github} variant="default" onClick={action("default clicked")} />
        <Icon icon={Github} variant="primary" onClick={action("primary clicked")} />
        <Icon icon={Github} variant="destructive" onClick={action("destructive clicked")} />
        <Icon icon={Github} variant="ghost" onClick={action("ghost clicked")} />
      </div>
      <div className="flex gap-4">
        <Icon icon={Github} size="sm" onClick={action("small clicked")} />
        <Icon icon={Github} size="default" onClick={action("default size clicked")} />
        <Icon icon={Github} size="lg" onClick={action("large clicked")} />
      </div>
    </div>
  ),
} 