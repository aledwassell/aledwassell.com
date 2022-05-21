import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-navigation',
    template: `
        <nav class="mw100 ph1-ns w-100 bg-white fixed">
            <div class="cf ph1-ns mh1">
                <div class="fl w-15 f4 f5-ns pv3 pv2-ns mh1 name">
                    <a class="pointer" routerLink="/">aled wassell</a>
                </div>
                <div class="fr w-15 f4 f5-ns pv3 pv2-ns mh1 resume">
                    <a class="pointer" routerLink="/resume">resume</a>
                </div>
            </div>
        </nav>
    `,
    styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
