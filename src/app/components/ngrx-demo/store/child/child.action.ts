import { createAction, props } from '@ngrx/store';

export const SET_CHILD_VALUE = '[CHILD] SET CHILD VALUE';

const setChildValue = createAction(SET_CHILD_VALUE);

export const childActions = {
  setChildValue,
};
