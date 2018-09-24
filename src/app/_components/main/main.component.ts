import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {AfterViewInit} from '@angular/core';
import {Link} from '../../_interfaces/link';

@Component({
    selector: 'app-main',
    template: `
        <div class="main-container">
            <ul class="list links" #list>
                <li class="link pv3 pv3-ns pv3-m pv3-l" *ngFor="let link of links">
                    <div class="info" *ngIf="link.title">
                        <h1 class="tc f1 f-subheadline-m f-headline-l lh-solid fw6">
                            {{link.title.title1}}
                            <br>
                            {{link.title.title2}}
                        </h1>
                    </div>
                    <div class="tc f3 f3-ns f4-m f3-l" *ngIf="!link.title">
                        <a class="pointer" href="{{link.aLink}}">{{link.heading}}</a>
                    </div>
                </li>
            </ul>
        </div>
    `,
    styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, AfterViewInit {
    @ViewChild('list') elementLink: ElementRef;
    viewHeight: number;
    private title: Link = {
        heading: '',
        aLink: 'http://aledwassell.com/',
        title: {
            title1: `[front-end`,
            title2: `developer]`
        }
    };

    public links: Array<Link> = [
        {
            "heading": "/wikipedia_viewer/",
            "aLink": "https://aledwassell.github.io/wikipedia_viewer/"
        },
        {
            "heading": "/giphy_api/",
            "aLink": "https://aledwassell.github.io/gif-app/"
        },
        {
            "heading": "/weather_api/",
            "aLink": "https://aledwassell.github.io/local-weather/"
        },
        {
            "heading": "/responsive/",
            "aLink": "https://aledwassell.github.io/responsive/module_3/"
        },
        {
            "heading": "/quote_maker/",
            "aLink": "https://aledwassell.github.io/quoter/"
        },
        {
            "heading": "/todos_app/",
            "aLink": "https://aledwassell.github.io/app/"
        },
        {
            "heading": "/david_bowie/",
            "aLink": "https://aledwassell.github.io/david_bowie_tribute/"
        }
    ];

    constructor() {
    }

    ngOnInit() {
        this.links.splice(Math.floor(this.links.length / 2), 0, this.title);
    }

    ngAfterViewInit() {
        this.viewHeight = this.elementLink.nativeElement.offsetHeight;
    }

}
