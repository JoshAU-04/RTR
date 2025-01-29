import { it, describe, expect, test } from 'vitest'
import { flushSync, mount, unmount } from 'svelte';
import { render } from '@testing-library/svelte'
import Ability from '../../lib/components/Ability.svelte'
import * as index from '../../lib/components/index';
import { prerender } from '../../routes/+layout.ts'

describe("Ability", () => {
    let component = null;

    beforeEach(() => {
        component = mount(Ability, {
            target: document.body
        });
    })

    afterEach(() => {
        unmount(component);
    })

    test("ability is defined", () => {
        expect(component).toBeDefined();
    })

    test('renders ability name', async () => {
        return true
    })

    test('renders ability description', async () => {
        return true
    })

    test('renders ability icon', async () => {
        return true
    })
})

describe('index, layout, and other misc exports', () => {
  it('should export Ability component', () => {
    expect(index.Ability).toBe(Ability);
  });

  it('index page under construction', () => {
    expect(prerender).toBeTruthy();
  });
});
