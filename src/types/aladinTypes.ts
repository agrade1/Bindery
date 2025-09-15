export type AladinBook = {
  title: string;
  link: string;
  cover: string;
  author: string;
  publisher: string;
  pubDate: string;
};

export type AladinResponse = {
  item: AladinBook[];
};
