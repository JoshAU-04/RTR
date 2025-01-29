import { describe, expect, test } from 'vitest'
import { flushSync, mount, unmount } from 'svelte';
import { render } from '@testing-library/svelte'
import Navigation from './Navigation.svelte'

describe("Navigation", () => {
    let component = null;

    beforeEach(() => {
        //create instance of the component and mount it
        component = mount(Navigation, {
            target: document.body
        });
    })

    afterEach(() => {
        unmount(component);
    })

    test("navigation is defined", () => {
        expect(component).toBeDefined();
    })

    test('renders footer date', async () => {
        let text = ``
        expect(document.body.innerHTML).toContain(text);
    })
})

