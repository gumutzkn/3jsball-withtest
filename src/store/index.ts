import { create } from 'zustand';

import { StoreState } from '../types';

export const useStore = create<StoreState>((set) => ({
  speed: 0.05,
  color: 'orange',
  isStarted: false,
  increaseSpeed: () =>
    set((state) => ({ speed: state.speed + 0.01 })),
  decreaseSpeed: () =>
    set((state) => ({ speed: state.speed - 0.01 })),
  changeSpeed: (newSpeed) => set({ speed: newSpeed }),
  changeColor: (newColor) => set({ color: newColor }),
  toggleGame: () => set((state) => ({ isStarted: !state.isStarted })),
}));
