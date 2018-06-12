import { h, app, View } from 'hyperapp';
import _debug from 'debug';
import { counterState, counterActions } from './counter';
import { CounterView } from './counter';

const debug = _debug('app:index');

const state = {
  counter: counterState,
};

const actions = {
  counter: counterActions,
};

type stateType = typeof state;
type actionsType = typeof actions;

export const view: View<stateType, actionsType> = (state, actions) => (
  <div>
    <h1>App</h1>
    {CounterView({ ...state.counter, ...actions.counter })}
  </div>
);

const appActions = app<stateType, actionsType>(
  state,
  actions,
  view,
  document.body
);

debug('application launched');
