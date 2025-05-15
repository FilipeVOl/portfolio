declare module 'react-chrono' {
  import { ReactNode } from 'react';

  export interface ChronoItem {
    title: string;
    cardTitle?: string;
    cardSubtitle?: string;
    cardDetailedText?: string;
    [key: string]: any;
  }

  export interface ChronoTheme {
    primary?: string;
    secondary?: string;
    cardBgColor?: string;
    titleColor?: string;
    titleColorActive?: string;
    cardTitleColor?: string;
    cardSubtitleColor?: string;
    cardDetailsColor?: string;
  }

  export interface ChronoProps {
    items: ChronoItem[];
    mode?: 'VERTICAL' | 'VERTICAL_ALTERNATING' | 'HORIZONTAL';
    disableToolbar?: boolean;
    cardHeight?: number;
    mediaHeight?: number;
    hideControls?: boolean;
    theme?: ChronoTheme;
    fontSizes?: {
      cardSubtitle?: string;
      cardText?: string;
      cardTitle?: string;
      title?: string;
    };
    className?: string;
    slideItemDuration?: number;
    timelinePointDimension?: number;
    timelinePointShape?: 'circle' | 'square';
    children?: ReactNode;
  }

  export const Chrono: React.FC<ChronoProps>;
} 