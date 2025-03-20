import { create } from "zustand";

type Store = {
  sidebarOpened: boolean;
  setSidebarOpened: () => void;
};

const useUiStore = create<Store>()((set) => ({
  sidebarOpened: false,
  setSidebarOpened: () =>
    set((state) => ({ sidebarOpened: !state.sidebarOpened })),
}));

export default useUiStore;
