import { create } from 'zustand';

interface State {
  count: number;
  increment: () => void;
  decrement: () => void;
  updateState: (newState: number) => void;
}

const useStore = create<State>((set) => ({
  count: 0,
  increment: () => set((prevState: State) => ({ count: prevState.count + 1 })),
  decrement: () => set((prevState: State) => ({ count: prevState.count - 1 })),
  updateState: (newState: number) => set({ count: newState })
}));

export default useStore;
