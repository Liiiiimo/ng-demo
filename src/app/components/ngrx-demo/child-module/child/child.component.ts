import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../store';
import { childActions } from '../../store/child/child.action';
import { selctChild } from '../../store/child/child.selector';
import { ChildStore } from './child.store';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [ChildStore]
})
export class ChildComponent implements OnInit {

  value: number = 0;
  componentValue: number = 0;

  constructor (private store: Store<AppStateInterface>, private childStore: ChildStore) { }

  ngOnInit(): void {
    this.store.select(selctChild).subscribe(res => {
      this.value = res.value;
    });
    this.childStore.value$.subscribe(res => {
      this.componentValue = res;
    });
  }

  onSetChild(): void {
    this.store.dispatch(childActions.setChildValue());
  }

  onSetChildComponent(): void {
    this.childStore.updateValue$();
  }



}
