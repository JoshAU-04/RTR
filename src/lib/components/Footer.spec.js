import { describe, expect, test } from 'vitest'
import { flushSync, mount, unmount } from 'svelte';
import { render } from '@testing-library/svelte'
import Footer from './Footer.svelte'

describe("Footer", () => {
    let component = null;

    beforeEach(() => {
        //create instance of the component and mount it
        component = mount(Footer, {
            target: document.body
        });
    })

    afterEach(() => {
        unmount(component);
    })

    test("footer is defined", () => {
        expect(component).toBeDefined();
    })

    test('renders footer date', async () => {
        let text = `© ${new Date().getFullYear()} Game Project. All rights reserved.`
        expect(document.body.innerHTML).toContain(text);
    })
})

