import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '..';
import { ChildStateInterface } from './child.reductor';

export const CHILD_STATE_KEY = 'CHILD_STATE_KEY';


export const selctChild = createFeatureSelector<ChildStateInterface>(CHILD_STATE_KEY);