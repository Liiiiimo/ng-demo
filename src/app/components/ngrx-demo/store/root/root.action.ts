import { createAction, props } from '@ngrx/store';

export const SET_ROOT_ACTION = '[ROOT] SET ROOT';

export const setRootAction = createAction(SET_ROOT_ACTION, props<{ value: number }>());

export const rootActions = {
  setRootAction,
};
