import { render, screen, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Banner from '../components/banner';

describe('Banner Component', () => {
  it('renders the base div', async () => {
    await act(async () => {
      render(<Banner bannerContent={{}}  />);
    });
    console.log(document.body.innerHTML)
    const bannerElement = screen.queryByTestId('banner');
    expect(bannerElement).toBeInTheDocument();
  });
});