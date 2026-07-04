import type { TShoes } from "./../../type";

export const fetchListProduct = async (): Promise<TShoes[]> => {
  try {
    const response = await fetch(
      "https://apistore.cybersoft.edu.vn/api/Product", 
      {
        next: {revalidate: 10}
      },
    );
    const rs = await response.json();
    return rs.content;
  } catch (error) {
    throw error;
  }
};

export const fetchDetailProduct = async (id: string): Promise<TShoes> => {
  try {
    const response = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`,
      {
        next: {revalidate: 10}
      },
    );
    const rs = await response.json();
    return rs.content;
  } catch (error) {
    throw error;
  }
};

export const fetchListByKeyword = async (
  searchTerm: string,
): Promise<TShoes[]> => {
  try {
    const response = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product?keyword=${searchTerm}`,
      {
        next: {revalidate: 10}
      },
    );
    const rs = await response.json();
    return rs.content;
  } catch (error) {
    throw error;
  }
};
