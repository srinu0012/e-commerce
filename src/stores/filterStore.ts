import { create } from "zustand";
import filterProductsType from "../types/store-types/filterProductStoreType";

export let filterProductStore = create<filterProductsType>()((set) => ({
  filterProducts: [],
  setFilterProducts: (products) =>
    set(() => ({ filterProducts: [...products] })),
}));
