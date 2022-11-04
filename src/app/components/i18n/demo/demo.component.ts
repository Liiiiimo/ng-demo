import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor (private translateSvc: TranslateService) { }

  ngOnInit(): void {
    this.translateSvc.addLangs(['en', 'zh']);
    this.translateSvc.use('en');
  }

  onChange(): void {
    const lang = {
      'zh': 'en',
      'en': 'zh'
    };
    this.translateSvc.use(lang[this.translateSvc.currentLang as 'en' | 'zh']);
  }

}
