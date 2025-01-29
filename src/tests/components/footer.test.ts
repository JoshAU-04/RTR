import { describe, expect, it } from 'vitest'
import { flushSync, mount, unmount } from 'svelte';
import { render } from '@testing-library/svelte'
import Footer from '../../lib/components/Footer.svelte'

describe("Footer", () => {
    let component = null;

    beforeEach(() => {
        component = mount(Footer, {
            target: document.body
        });
    })

    afterEach(() => {
        unmount(component);
    })

    it("footer is defined", () => {
        expect(component).toBeDefined();
    })

    it('renders footer date', async () => {
        let text = `© ${new Date().getFullYear()} Game Project. All rights reserved.`
        expect(document.body.innerHTML).toContain(text);
    })
})


