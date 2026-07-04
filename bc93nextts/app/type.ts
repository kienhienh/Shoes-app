export type TInitialState<T> = {
  loading: boolean,
  data: null | any,
  error: null | any,
}
export type TShoes = {
    sizes: number[],
    id: number,
    name: string,
    alias: string,
    price: number,
    description: string,
    size: string,
    shortDescrpition: string,
    quantity: number,
    deleted: boolean,
    categories: string,
    relatedProducts: string,
    feature: boolean,
    image: string,
    imgLink: string,
}