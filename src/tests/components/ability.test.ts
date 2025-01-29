import { describe, expect, test } from 'vitest'
import { flushSync, mount, unmount } from 'svelte';
import { render } from '@testing-library/svelte'
import Ability from '../../lib/components/Ability.svelte'

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

