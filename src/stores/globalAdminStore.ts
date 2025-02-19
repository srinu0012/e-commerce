import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import globalStoreType from "../types/globalStoreType";

export const globalStore = create<globalStoreType>()(
  devtools(
    persist(
      (set) => ({
        globalProducts: {},
        setGlobalProducts: (username, products) =>
          set((state) => ({
            globalProducts: { ...state.globalProducts, [username]: products },
          })),
      }),
      { name: "global-store" } 
    )
  )
);
