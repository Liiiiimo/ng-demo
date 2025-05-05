import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChildStateInterface } from './child.reductor';

export const CHILD_STATE_KEY = 'CHILD_STATE_KEY';

export const selectChild = createFeatureSelector<ChildStateInterface>(CHILD_STATE_KEY);
