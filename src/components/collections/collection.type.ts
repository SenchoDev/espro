export type Collection = {
  image: string;
  stars: number;
  name: string;
  status?: {
    text: string;
    color: string;
  };
  price: Price;
  colors?: string[];
};

export type Price = {
  default: string;
  range?: string;
  old?: string;
}
