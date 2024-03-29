import { create } from 'zustand';

interface State {
  items: false | { name: string; count: number }[];
  setItems: (items: false | { name: string; count: number }[]) => void;
  alert: string | false;
  setAlert: (alert: string | false) => void;
}

const useStore = create<State>((set) => ({
  items: false,
  setItems: (items: false | { name: string; count: number }[]) => set({ items }),
  alert: false,
  setAlert: (alert: string | false) => set({ alert })
}));

export default useStore;
