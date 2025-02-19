import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import CartStoreType from "../types/store-types/cartStoreType";

export let CartStore = create<CartStoreType>()(
  devtools(
    persist(
      (set) => ({
        cartProducts: [],
        countProducts: {},
        orderedProducts: [],
        countOrderedProducts: {},
        buyNow: () =>
          set((state) => {
            return {
              cartProducts: [],
              countProducts: {},
              orderedProducts: [...state.orderedProducts, ...state.cartProducts],
              countOrderedProducts: {
                ...state.countOrderedProducts,
                ...state.countOrderedProducts,
              },
            };
          }),
        setProducts: (product) =>
          set((state) => {
            let Idexist = state.countProducts[product.id] || 0;
            let ProductExist = state.cartProducts.includes(product)
              ? [...state.cartProducts]
              : [...state.cartProducts, product];
            return {
              ...state,
              cartProducts: ProductExist,
              countProducts: {
                ...state.countProducts,
                [product.id]: Idexist + 1,
              },
            };
          }),
      }),
      { name: "cart-product" }
    )
  )
);
