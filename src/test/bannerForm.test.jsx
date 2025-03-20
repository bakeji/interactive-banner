import { render, screen, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BannerForm from '../components/bannerForm';

describe('BannerForm Component', () => {
  it('renders the base div', async () => {
    await act(async () => {
      render(<BannerForm bannerContent={{}} setBannerContent={() => {}} />);
    });
    console.log(document.body.innerHTML)
    const bannerFormElement = screen.queryByTestId('banner-form');
    expect(bannerFormElement).toBeInTheDocument();
  });
});