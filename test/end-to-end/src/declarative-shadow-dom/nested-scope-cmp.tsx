import { Component, h } from '@stencil/core';

@Component({
  tag: 'nested-scope-cmp',
  styleUrl: 'nested-scope-cmp.css',
})
export class NestedScopeCmp {
  render() {
    return (
      <div class="some-scope-class">
        <slot></slot>
      </div>
    );
  }
}
