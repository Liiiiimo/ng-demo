import { createReducer, on } from '@ngrx/store';
import { childActions } from './child.action';

export interface ChildStateInterface {
  name: string;
  value: number;
}

export const childState = {
  name: 'child',
  value: 0,
};

export const childReducor = createReducer(
  childState,
  on(childActions.setChildValue, (state, data) => ({
    ...state,
    value: state.value + 1,
  })),
);
