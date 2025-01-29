import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import Layout from '../../routes/+layout.svelte';

describe('Layout passes navigation props', () => {
  let renderLayout;

  beforeEach(() => {
    renderLayout = () => render(Layout, { props: { children: () => '' } });
  });

  it('renders release notes', () => {
    const { getByText } = renderLayout();
    expect(getByText('Release Notes')).toBeTruthy();
  });

  it('renders logo', () => {
    const { getByText } = renderLayout();
    expect(getByText('RTR')).toBeTruthy();
  });

  it('renders wiki', () => {
    const { getByText } = renderLayout();
    expect(getByText('Wiki')).toBeTruthy();
  });

  it('renders entities', () => {
    const { getByText } = renderLayout();
    expect(getByText('Entities')).toBeTruthy();
  });

  it('renders experience', () => {
    const { getByText } = renderLayout();
    expect(getByText('XP')).toBeTruthy();
  });
});


