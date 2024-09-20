import React from 'react';

import { useStore } from '../store';

const ControlPanel: React.FC = () => {
  const {
    speed,
    color,
    isStarted,
    changeColor,
    changeSpeed,
    toggleGame,
  } = useStore();

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='p-4 bg-gray-200 w-64'>
        <div className='mb-4'>
          <label
            htmlFor='color-select'
            className='block text-sm font-medium text-gray-700'
          >
            Top Rengi:
          </label>
          <select
            id='color-select'
            value={color}
            onChange={(e) => changeColor(e.target.value)}
            className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          >
            <option value='orange'>Turuncu</option>
            <option value='red'>Kırmızı</option>
            <option value='lightgreen'>Yeşil</option>
            <option value='cyan'>Mavi</option>
          </select>
        </div>
        <div className='mb-4'>
          <label
            htmlFor='speed-range'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            Top Hızı:
          </label>
          <input
            id='speed-range'
            type='range'
            min='0.001'
            max='0.2'
            step='0.001'
            value={speed}
            onChange={(e) => changeSpeed(parseFloat(e.target.value))}
            className='w-full'
          />
          <span className='block text-center mt-2'>{speed}</span>
        </div>

        <button
          id='toggle-game-button'
          data-testid='toggle-game-button'
          onClick={toggleGame}
          className='mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-400'
        >
          {isStarted ? 'Duraklat' : 'Başlat'}
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
