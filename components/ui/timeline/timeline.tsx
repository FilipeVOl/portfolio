'use client';

import * as React from 'react';
import type { TimelineElement } from '@/types';
import { Check, GitPullRequest, GitBranch, Calendar, Star, AlertTriangle, GraduationCap, Code2 } from 'lucide-react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { Typography } from '../typography';

interface TimelineProps {
  items: TimelineElement[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  const codeIconStyle = { background: '#13274F', color: '#fff' };
  const graduationCapIconStyle = { background: '#13274F', color: '#fff' };
  const gitBranchIconStyle = { background: '#13274F', color: '#fff' };

  return (
    <>
     
      <VerticalTimeline>
        {items.map(item => {
          let isCodeIcon = item.icon === "code";
          let isGraduationCapIcon = item.icon === "graduation-cap";
          let isGitBranchIcon = item.icon === "git-branch";

          return (
            <VerticalTimelineElement
              key={item.id}
              date={item.date}
              dateClassName="date"
              iconStyle={isCodeIcon ? codeIconStyle : isGraduationCapIcon ? graduationCapIconStyle : isGitBranchIcon ? gitBranchIconStyle : {}}
              icon={isCodeIcon ? <Code2 /> : isGraduationCapIcon ? <GraduationCap /> : isGitBranchIcon ? <GitBranch /> : null}
              contentStyle={{ background: '#13274F', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #13274F' }}
            >
              <Typography variant="h3">{item.title}</Typography>
              <Typography variant="h4">{item.description}</Typography>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </>
  );
}

Timeline.displayName = 'Timeline';