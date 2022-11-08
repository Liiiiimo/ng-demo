import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../store';
import { rootActions } from '../store/root/root.action';
import { getRootSelector } from '../store/root/root.selector';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  value: number = 0;

  constructor (private store: Store<AppStateInterface>) { }

  ngOnInit(): void {
    this.store.select(getRootSelector).subscribe(res => {
      this.value = res;
    });
  }

  onSetRoot(): void {
    this.store.dispatch(rootActions.setRootAction({ value: this.value + 1 }));
  }

}
