import type { Meta, StoryObj } from "@storybook/react"
import { Typography } from "./typography"

const meta: Meta<typeof Typography> = {
  title: "Components/ui/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "The quick brown fox jumps over the lazy dog",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "p", "blockquote", "list", "inline", "lead"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const Heading1: Story = {
  args: {
    variant: "h1",
    children: "Heading 1",
  },
}

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "Heading 2",
  },
}

export const Heading3: Story = {
  args: {
    variant: "h3",
    children: "Heading 3",
  },
}

export const Heading4: Story = {
  args: {
    variant: "h4",
    children: "Heading 4",
  },
}

export const Paragraph: Story = {
  args: {
    variant: "p",
    children: "This is a paragraph of text. Typography components help maintain consistent text styles across your application. They can be customized using the className prop while maintaining the base styles.",
  },
}

export const Lead: Story = {
  args: {
    variant: "lead",
    children: "This is a lead paragraph, used for introductory text.",
  },
}

export const Blockquote: Story = {
  args: {
    variant: "blockquote",
    children: "This is a blockquote. It's commonly used for citations or calling attention to a particular piece of text.",
  },
}

export const List: Story = {
  args: {
    variant: "list",
    children: (
      <>
        <li>First item in the list</li>
        <li>Second item in the list</li>
        <li>Third item in the list</li>
      </>
    ),
  },
}

export const Inline: Story = {
  args: {
    variant: "inline",
    children: "This is inline text",
  },
}

export const WithCustomClass: Story = {
  args: {
    variant: "h1",
    className: "text-blue-500 italic",
    children: "Custom styled heading",
  },
}

// Example showing all variants together
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="lead">Lead text for important paragraphs</Typography>
      <Typography variant="p">Regular paragraph text</Typography>
      <Typography variant="blockquote">A nice blockquote</Typography>
      <Typography variant="list">
        <li>List item one</li>
        <li>List item two</li>
      </Typography>
      <Typography variant="inline">Inline text</Typography>
    </div>
  ),
}
