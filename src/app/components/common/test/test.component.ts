import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './test.component.html',
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
