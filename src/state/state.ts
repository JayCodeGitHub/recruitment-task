import { create } from 'zustand';

interface State {
  items: false | { name: string; count: number }[];
  setItems: (items: false | { name: string; count: number }[]) => void;
}

const useStore = create<State>((set) => ({
  items: false,
  setItems: (items: false | { name: string; count: number }[]) => set({ items })
}));

export default useStore;
