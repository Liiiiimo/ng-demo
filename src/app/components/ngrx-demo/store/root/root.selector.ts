import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '..';
import { RootStateInterface } from './root.reducer';

export const selectRootState = (state: AppStateInterface) => state.rootReducer;

export const getRootSelector = createSelector(selectRootState, (state: RootStateInterface) => state.value);
