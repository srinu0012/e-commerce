import { create } from "zustand";
import MoreStoreType from "../types/moreStoreType";

export const MoreStore = create<MoreStoreType>()((set) => ({
  Products: [],
  viewMore: async (newproducts) =>
    set((state: { Products: Record<string, any>[] }) => ({
      Products: [...state.Products, ...newproducts],
    })),
}));
