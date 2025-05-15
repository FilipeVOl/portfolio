import { Code2, GitBranch, GraduationCap } from 'lucide-react';
import type { TimelineElement } from '@/types';

export const experienceItems: TimelineElement[] = [
  {
    id: 1,
    date: '2024-Present',
    title: 'Frontend Developer at Unievangélica',
    description: 'I have developed institutional academic initiatives by architecting and deploying a modern research‐application platform—streamlining the user interface and experience, which produced a 30% increase in submitted proposals, demonstrating a clear uptick in researcher engagement..',
    icon: "code",
    status: 'in-progress',
    color: 'primary',
  },
  {
    id: 2,
    date: '2022-2024',
    title: 'Frontend Developer at FTT',
    description: 'Participated in the development of a pet clinic management system, which improved the clinic\'s operations and client satisfaction by a dynamic and user-friendly interface.',
    icon: "git-branch",
    status: 'completed',
    color: 'muted',
  },
  {
    id: 3,
    date: '2021',
    title: 'Started software engineering degree',
    description: 'Began my journey in web development, focusing on HTML, CSS, and JavaScript fundamentals.',
    icon: "graduation-cap",
    status: 'completed',
    color: 'secondary',
  },
  
]; 