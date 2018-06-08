import { Chapter } from './chapter.model';

export interface Try {
  id: string;
  page: string;
  title: string;
  text: string;
  chapter: Chapter;
  createdAt?: string;
  updatedAt?: string;
}
