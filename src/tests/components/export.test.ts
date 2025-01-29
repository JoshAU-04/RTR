import { describe, expect, it } from 'vitest';
import * as index from '../../lib/components/index';
import Ability from '../../lib/components/Ability.svelte'

describe('index.ts exports', () => {
  it('should export Ability component', () => {
    expect(index.Ability).toBe(Ability);
  });
});


