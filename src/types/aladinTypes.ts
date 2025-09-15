export type AladinBook = {
  title: string;
  link: string;
  cover: string;
  author: string;
  publisher: string;
  description: string;
  pubDate: string;
  isbn13: string;
};

export type AladinResponse = {
  item: AladinBook[];
};

export type AladinLookUpItem = {
  itemId: string;
  title: string;
  author: string;
  publisher: string;
  pubDate: string;
  cover: string;
  link: string;
  description?: string;
  fullDescription?: string;
  fullDescription2?: string;
  story?: string;
  subInfo?: {
    subTitle?: string;
    originalTitle?: string;
    itemPage?: number;
  };
  ratingInfo?: {
    ratingScore?: number;
    ratingCount?: number;
  };
};

export type AladinLookUpResponse = {
  version: string;
  title: string;
  item: AladinLookUpItem[];
};
