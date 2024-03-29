import { create } from 'zustand';

interface State {
  items: false | { name: string; count: number }[];
  setItems: (items: false | { name: string; count: number }[]) => void;
  alert: string | false;
  setAlert: (alert: string | false) => void;
  page: number;
  setPage: (page: number) => void;
  itemsPerPage: number;
  setItemsPerPage: (itemsPerPage: number) => void;
}

const useStore = create<State>((set) => ({
  items: false,
  setItems: (items: false | { name: string; count: number }[]) => set({ items }),
  alert: false,
  setAlert: (alert: string | false) => set({ alert }),
  page: 1,
  setPage: (page: number) => set({ page }),
  itemsPerPage: 10,
  setItemsPerPage: (itemsPerPage: number) => set({ itemsPerPage })
}));

export default useStore;
