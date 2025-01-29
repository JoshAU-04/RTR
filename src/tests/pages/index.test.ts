import { it, describe, expect } from 'vitest'
import { flushSync, mount, unmount } from 'svelte';
import { render } from '@testing-library/svelte'
import Page from '../../routes/+page.svelte'

describe("Index contents", () => {
	let component = null;

	beforeEach(() => {
		component = mount(Page, {
			target: document.body
		});
	})

	afterEach(() => {
		unmount(component);
	})

	it("page is defined", () => {
		expect(component).toBeDefined();
	})


	it('index page under construction', () => {
		expect(document.body.innerHTML).toContain("under construction");
	});
})
