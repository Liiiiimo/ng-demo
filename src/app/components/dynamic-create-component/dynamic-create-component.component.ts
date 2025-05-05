import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DemoComponent } from './components/demo/demo.component';

@Component({
  selector: 'app-dynamic-create-component',
  templateUrl: './dynamic-create-component.component.html',
  styleUrls: ['./dynamic-create-component.component.scss'],
})
export class DynamicCreateComponentComponent implements OnInit {
  @ViewChild('dynamicCreateInnerHTMLTpl', { read: TemplateRef, static: true })
  dynamicCreateInnerHTMLTpl!: TemplateRef<any>;
  @ViewChild('dynamicCreatecdkTemplatePortal', { read: TemplateRef, static: true })
  dynamicCreatecdkTemplatePortal!: TemplateRef<any>;
  @ViewChild('dynamicCreateDom', { read: ElementRef, static: true }) dynamicCreateDom!: ElementRef<HTMLElement>;
  @ViewChild('demo1Tpl', { read: ViewContainerRef, static: true }) demo1Tpl!: ViewContainerRef;
  @ViewChild('demo2Tpl', { read: ViewContainerRef, static: true }) demo2Tpl!: ViewContainerRef;
  @ViewChild('demo3Tpl', { read: ViewContainerRef, static: true }) demo3Tpl!: ViewContainerRef;
  @ViewChild('demo4Tpl', { read: ViewContainerRef, static: true }) demo4Tpl!: ViewContainerRef;

  selectPortal?: Portal<any>;

  constructor(private _vcr: ViewContainerRef) {}

  ngOnInit(): void {
    this.createCpn1();
    this.createCpn2();
  }

  createCpn1(): void {
    this.demo1Tpl.createEmbeddedView(this.dynamicCreateInnerHTMLTpl, { name: 'demo01' });
  }

  createCpn2(): void {
    this.demo2Tpl.createComponent(DemoComponent);
  }

  createCpn3(): void {
    const cpn = new TemplatePortal(this.dynamicCreatecdkTemplatePortal, this._vcr);
    this.selectPortal = cpn;
  }

  createCpn4(): void {
    const cpn = new ComponentPortal(DemoComponent);
    this.selectPortal = cpn;
  }

  createCpn5(): void {
    const dom = new DomPortal(this.dynamicCreateDom);
    this.selectPortal = dom;
  }
}
