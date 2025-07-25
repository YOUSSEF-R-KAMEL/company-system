import { EntityState } from "@ngrx/entity";

export interface IArticle {
  id: number;
  name: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IArticleModel extends EntityState<IArticle>{
  errorMsg:string,
  isLoading: boolean
}