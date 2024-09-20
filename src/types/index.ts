export type WallProps = {
  meshX: number;
  meshY: number;
  meshZ: number;
  boxWidth: number;
  boxHeight: number;
  boxDepth: number;
  color: string;
};

export type StoreState = {
  speed: number;
  color: string;
  isStarted: boolean;
  increaseSpeed: () => void;
  decreaseSpeed: () => void;
  changeSpeed: (newSpeed: number) => void;
  changeColor: (newColor: string) => void;
  toggleGame: () => void;
};
