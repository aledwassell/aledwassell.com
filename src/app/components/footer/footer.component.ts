import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  public year: number = new Date().getFullYear();

  public links: Array<{name: string, url: string, cls: string}> = [
      {name: 'github/', url: 'https://github.com/aledwassell', cls: 'github'},
      {name: 'codepen/', url: 'http://codepen.io/aledwassell/', cls: 'codepen'},
      {name: 'linkedin/', url: 'https://www.linkedin.com/in/aled-wassell-688bba1a/', cls: 'linkedin'},
  ];

  constructor() { }

  ngOnInit() {}

}
