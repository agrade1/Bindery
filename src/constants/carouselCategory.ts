type CarouselCategory = {
  key: string;
  title: string;
  queryType: 'Bestseller' | 'ItemNewAll' | 'ItemEditorChoice';
  categoryId: number;
};

export const carouselCategory: CarouselCategory[] = [
  { key: 'bestseller', title: '베스트셀러', queryType: 'Bestseller', categoryId: 0 },
  { key: 'novel', title: '소설/시/희곡', queryType: 'ItemNewAll', categoryId: 351 },
  { key: 'essay', title: '에세이', queryType: 'ItemNewAll', categoryId: 1237 },
];
