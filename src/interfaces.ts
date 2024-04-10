export interface EGetNews {
  target: HTMLInputElement;
  currentTarget: HTMLElement
}

export interface LoaderFor {
  baseLink: string;
  options: {};
  endpoint?: string;
}

// export interface AppStartInterface extends LoaderFor {
//   getNews(e: EGetNews | MouseEvent, callback: () => void): void | undefined;
//   getSources(callback: (() => void) | undefined): void
// }
export type CallbackType <T> = (data?: T) => void


export interface LoaderGetNews extends LoaderFor {
  getNews(e: EGetNews | MouseEvent, callback: CallbackType<DrawNewsInterface> ): void;
  getSources(callback: CallbackType<DrawNewsInterface>): void;
}

export interface AppViewInterface {
  news: { draw(data: [SourceInterface] | never[]): void };
  sources: { draw(data: [SourceInterface] | [SourceInterface][]): void };
  drawNews(data?: DrawNewsInterface ): void  ;
  drawSources(data?: DrawNewsInterface): void;
}

export interface errorHandler {
  json(): {};
  ok: boolean;
  status: number;
  statusText: string | undefined;
}

export interface LoadCallBack {
  (): void;
  (arg0: {}): void;

}


export interface SourceInterface {
  author: string,
  content: string;
  description: string,
  publishedAt: string,
  source: {
    id: string,
    name: string
  },
  id: string,
  name: string
  title: string,
  url: string,
  urlToImage: string
}

// app View 
export interface DrawNewsInterface {
  status: string;
  totalResults: number;
  articles: [SourceInterface];
  sources: [SourceInterface][];
}

