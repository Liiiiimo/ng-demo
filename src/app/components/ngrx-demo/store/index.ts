import { ChildStateInterface } from './child/child.reductor';
import { RootStateInterface } from './root/root.reducer';

export interface AppStateInterface {
  rootReducer: RootStateInterface;
}
