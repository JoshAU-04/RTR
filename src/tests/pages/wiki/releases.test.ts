import { it, describe, expect } from 'vitest'
import { flushSync, mount, unmount } from 'svelte';
import { render } from '@testing-library/svelte'
import Page from '../../../routes/wiki/releases/+page.svelte'

describe("Releases", () => {
    let component = null;

    beforeEach(() => {
        component = mount(Page, {
            target: document.body
        });
    })

    afterEach(() => {
        unmount(component);
    })

    it("is defined", () => {
        expect(component).toBeDefined();
    })


    it('is *not* under construction', () => {
        expect(document.body.innerHTML).not.toContain("under construction");
    });

    it('has release notes', () => {
        expect(document.body.innerHTML).toContain("Release Notes");
    });
})

