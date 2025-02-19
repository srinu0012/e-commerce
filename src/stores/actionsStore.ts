import { create } from "zustand";
import ActionStoreType from "../types/actionStoreType";

export const ActionStore = create<ActionStoreType>()((set) => ({
  Hamburger: false,
  toggleHamburger: () => set((state) => ({ Hamburger: !state.Hamburger })),
}));
