import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
      <footer class="w-100 pv0 fixed">
          <div class="mw100 ph1-ns mh1">
              <div class="cf ph1-ns">
                  <div class="fl f6 f5-ns mh0 pv2 pv3-ns dn di-l di-ns copy">
                      <a class="pointer" href="https://aledwassell.com">/made_by_aled_©_{{year}}/</a>
                  </div>
                  <div class="fl f6 f5-ns mh0 pv2 pv3-ns di dn-ns dn-l copy">
                      <a class="pointer" href="https://aledwassell.com">/©_{{year}}/</a>
                  </div>
                  <div class="fr f6 f5-ns pv2 pv3-ns mh0 {{link.cls}}" *ngFor="let link of links">
                      <a class="pointer" [attr.href]="link.url" target="_blank">{{link.name}}</a>
                  </div>
              </div>
          </div>
      </footer>
  `,
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  public year: number = new Date().getFullYear();

  public links: Array<object> = [
      {name: 'github/', url: 'https://github.com/aledwassell', cls: 'github'},
      {name: 'codepen/', url: 'http://codepen.io/aledwassell/', cls: 'codepen'},
      {name: 'linkedin/', url: 'https://www.linkedin.com/in/aled-wassell-688bba1a/', cls: 'linkedin'},
  ];

  constructor() { }

  ngOnInit() {}

}
