import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReplaySubject, takeUntil } from 'rxjs';
import { AppStateInterface } from '../../store';
import { childActions } from '../../store/child/child.action';
import { selectChild } from '../../store/child/child.selector';
import { SelfStore } from './self.store';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  providers: [SelfStore]
})
export class ChildComponent implements OnInit, OnDestroy {

  value: number = 0;
  componentValue: number = 0;

  destorySub$ = new ReplaySubject<boolean>();

  constructor (private store: Store<AppStateInterface>, private selfStore: SelfStore) { }

  ngOnInit(): void {
    this.store.select(selectChild).pipe(takeUntil(this.destorySub$)).subscribe(res => {
      this.value = res.value;
    });

    this.selfStore.value$.pipe(takeUntil(this.destorySub$)).subscribe(res => {
      this.componentValue = res;
    });
  }

  ngOnDestroy(): void {
    this.destorySub$.next(true);
    this.destorySub$.complete();
  }

  onSetChild(): void {
    this.store.dispatch(childActions.setChildValue());
  }

  onSetChildComponent(): void {
    this.selfStore.updateValue$();
  }



}
