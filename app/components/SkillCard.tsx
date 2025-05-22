import React from 'react'
import { Typography } from '@/components/ui/typography'

const SkillCard = ({ title, content, id }: { title: string, content: string, id?: string }) => {
  return (
    <div id={id}>
      <div className="flex mt-6 md:mt-0 gap-2 items-center">
        <Typography className="font-bold" variant="h3">{title}</Typography>
      </div>
      <Typography variant="subdesc">{content}</Typography>
    </div>
  )
}

export default SkillCard