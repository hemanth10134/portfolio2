import type { ReactElement, SVGProps, FC } from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string[];
  link?: string;
}

export interface Skill {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}

export interface OnlinePresenceItem {
  name: string;
  url: string;
  icon: ReactElement<SVGProps<SVGSVGElement>>;
}