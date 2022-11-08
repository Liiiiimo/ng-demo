import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';


export interface ChildStateInterface {
    name: string,
    value: number;
}

export const childState: ChildStateInterface = {
    name: 'component child',
    value: 0
};

@Injectable()
export class ChildStore extends ComponentStore<ChildStateInterface>{

    constructor () {
        super(childState);
    }

    readonly value$ = this.select(state => state.value);

    readonly updateValue$ = this.updater((childState) => ({ ...childState, value: childState.value + 1 }));


}