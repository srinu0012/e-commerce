import api from "./api";

export const categoryList = async () => {
  try {
    let response = await api.get("products/category-list");
    return response.data
  } catch (error) {
    return error
  }
};


export const fetchProducts = async (category: string ) => {
  try {
    let response = await api.get(`products/category/${category}`);

    return response.data.products
  } catch (error) {
    return error
  }
};

const itemsPerPage = 10;

export const limitFetchProducts: (
  currentPage: number,
  viewMore: Function
) => Promise<void|unknown> = async (currentPage: number, viewMore: Function) => {
  try {
    const response = await api.get(
      `/products?limit=${itemsPerPage}&skip=${
        (currentPage - 1) * itemsPerPage
      }&select=id,title,price,thumbnail`
    );

    viewMore(response.data.products);
  } catch (error) {
    return error
  }
};


export const fetchProductItem = async (id:string) => {
  try {
    let respone = await api.get(`/products/${id}`);
    return respone.data;
  } catch (error) {
    return error;
  }
};
