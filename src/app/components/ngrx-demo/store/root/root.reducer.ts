import { createReducer, on } from '@ngrx/store';
import { rootActions } from './root.action';

export interface RootStateInterface {
    name: string,
    value: number;
}

const rootState: RootStateInterface = {
    name: 'root',
    value: 1
};


export const rootReducer = createReducer(
    rootState,
    on(rootActions.setRootAction, (state, { value }) => {
        return {
            ...state,
            value
        };
    })
);


