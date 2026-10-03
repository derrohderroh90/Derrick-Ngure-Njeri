export type ArticleCategory = 'Engineering' | 'Design & Craft' | 'The Silicon Savannah' | 'Philosophy';

export interface ArticleContentBlock {
  type: 'paragraph' | 'heading' | 'quote' | 'code' | 'callout';
  value: string;
  extra?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ArticleCategory;
  date: string;
  readTime: string;
  summary: string;
  coverImage: string;
  featured: boolean;
  content: ArticleContentBlock[];
  audioLength: string;
  claps: number;
}

export interface Bookmark {
  articleId: string;
  savedAt: string;
}
