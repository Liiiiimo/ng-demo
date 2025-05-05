import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface SelfStateInterface {
  name: string;
  value: number;
}

export const selfState: SelfStateInterface = {
  name: 'component child self store',
  value: 0,
};

@Injectable()
export class SelfStore extends ComponentStore<SelfStateInterface> {
  constructor() {
    super(selfState);
  }

  readonly value$ = this.select(state => state.value);

  readonly updateValue$ = this.updater(selfState => ({ ...selfState, value: selfState.value + 1 }));
}
