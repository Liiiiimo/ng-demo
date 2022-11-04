import { Component, Inject, LOCALE_ID, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, makeStateKey, Meta, SafeHtml, SafeUrl, SafeValue, Title, TransferState } from '@angular/platform-browser';
import { FormStyle, getLocaleDayNames, getLocaleDayPeriods, getLocaleMonthNames, getLocaleWeekEndRange, TranslationWidth } from '@angular/common';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  safeHTML?: SafeHtml;
  safeValue?: string | null;
  safeUrl?: SafeUrl;


  constructor (
    private meta: Meta,
    private title: Title,
    private transferState: TransferState,
    private dom: DomSanitizer,
    @Inject(LOCALE_ID) private locale: string
  ) { }

  ngOnInit(): void {
    this.meta.addTag({ name: 'test' });
    this.title.setTitle('demos');
    this.testStateKey();
    this.testTrustHTML();
    this.getlocal();
  }

  testStateKey() {
    const APP = makeStateKey<any>('APP');
    const APP1 = makeStateKey<any>('APP1');
    this.transferState.set(APP, { name: 'app1' });
    this.transferState.set(APP1, { name: 'app2' });
    console.log(this.transferState.get(APP1, {}));
  }

  testTrustHTML(): void {
    this.safeHTML = this.dom.bypassSecurityTrustHtml('<span>I\'m safe!</span>');
    this.safeValue = this.dom.sanitize(SecurityContext.HTML, 'sadasdas');
    // this.safeUrl = this.dom.bypassSecurityTrustUrl('https://v13.angular.io/assets/images/logos/angular/shield-large.svg');
  }

  getlocal() {
    const value = getLocaleWeekEndRange(this.locale);
    console.log(value);
    console.log(getLocaleMonthNames(this.locale,
      FormStyle.Standalone,
      TranslationWidth.Wide));
    console.log(getLocaleDayNames(this.locale, FormStyle.Format, TranslationWidth.Narrow));
    console.log(getLocaleDayPeriods(this.locale, FormStyle.Standalone, TranslationWidth.Short));
  }

}
