
import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}
