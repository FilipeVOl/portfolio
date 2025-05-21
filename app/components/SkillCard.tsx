import React from 'react'
import { Typography } from '@/components/ui/typography'
const SkillCard = ({ title, content, id }: { title: string, content: string, id?: string }) => {
  return (
    <div id={id} className="bg-transparent border border-black/10 shadow-lg p-4 rounded-lg w-full lg:flex-1">
        <Typography className="divide-b divide-black/10 md:whitespace-nowrap overflow-hidden md:text-ellipsis" variant="h3">{title}</Typography>
        <Typography className="md:whitespace-nowrap overflow-hidden text-ellipsis" variant="subdesc">{content}</Typography>
    </div>
  )
}

export default SkillCard