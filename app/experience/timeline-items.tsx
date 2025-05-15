import { Code2, GitBranch, GraduationCap } from 'lucide-react';
import type { TimelineElement } from '@/types';

export const experienceItems: TimelineElement[] = [
  {
    id: 1,
    date: '2022-Present',
    title: 'Frontend Developer at Unievangélica',
    description: 'Working on various web development projects, implementing modern frontend solutions using React, Next.js, and TypeScript.',
    icon: "code",
    status: 'in-progress',
    color: 'primary',
  },
  {
    id: 2,
    date: '2021',
    title: 'Started my Computer Science degree',
    description: 'Started my Computer Science degree, laying the foundation for my software development career.',
    icon: "graduation-cap",
    status: 'completed',
    color: 'muted',
  },
  {
    id: 3,
    date: '2021',
    title: 'Started Learning Web Development',
    description: 'Began my journey in web development, focusing on HTML, CSS, and JavaScript fundamentals.',
    icon: "git-branch",
    status: 'completed',
    color: 'secondary',
  },
  
]; 