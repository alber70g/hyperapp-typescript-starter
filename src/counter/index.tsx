import { h } from 'hyperapp';

export const counterState = {
  count: 0,
};

export const counterActions = {
  increment: (value: number = 1) => (
    state: typeof counterState,
    actions: typeof counterActions
  ) => ({ count: state.count + value }),
};

export const CounterView: View<typeof counterState & typeof counterActions> = (
  attributes
) => (
  <div>
    <h2>Counter</h2>
    <p>{attributes.count}</p>
    <p>
      <button onclick={() => attributes.increment()}>Increment</button>
      <button onclick={() => attributes.increment(-1)}>Decrement</button>
    </p>
  </div>
);
