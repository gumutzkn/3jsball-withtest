import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { useStore } from '../../src/store';
import ControlPanel from '../../src/components/ControlPanel';

describe('ControlPanel Component', () => {
  beforeEach(() => {
    cleanup();
    useStore.setState({
      speed: 0.05,
      color: 'orange',
      isStarted: false,
      changeColor: (newColor) =>
        useStore.setState({ color: newColor }),
      changeSpeed: (newSpeed) =>
        useStore.setState({ speed: newSpeed }),
      toggleGame: () =>
        useStore.setState((state) => ({
          isStarted: !state.isStarted,
        })),
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    const { getByLabelText, getByText } = render(<ControlPanel />);
    expect(getByLabelText('Top Rengi:')).toBeInTheDocument();
    expect(getByText('Top Hızı:')).toBeInTheDocument();
    expect(getByText('Başlat')).toBeInTheDocument();
  });

  it('changes color when a new color is selected', () => {
    const { getByLabelText } = render(<ControlPanel />);
    const select = getByLabelText('Top Rengi:') as HTMLSelectElement;

    fireEvent.change(select, { target: { value: 'red' } });
    expect(useStore.getState().color).toBe('red');
  });

  it('changes speed when the slider is moved', () => {
    const { getByLabelText } = render(<ControlPanel />);
    const rangeInput = getByLabelText(
      'Top Hızı:'
    ) as HTMLInputElement;

    fireEvent.change(rangeInput, { target: { value: '0.1' } });
    expect(useStore.getState().speed).toBe(0.1);
  });

  it('toggles the game state when the button is clicked', () => {
    const { getByTestId } = render(<ControlPanel />);
    const button = getByTestId('toggle-game-button');

    fireEvent.click(button);
    expect(useStore.getState().isStarted).toBe(true);
    expect(button).toHaveTextContent('Duraklat');

    fireEvent.click(button);
    expect(useStore.getState().isStarted).toBe(false);
    expect(button).toHaveTextContent('Başlat');
  });

  it('displays the correct button text based on the game state', () => {
    useStore.setState({ isStarted: true });
    const { getByTestId } = render(<ControlPanel />);
    const button = getByTestId('toggle-game-button');
    expect(button).toHaveTextContent('Duraklat');
  });
});
