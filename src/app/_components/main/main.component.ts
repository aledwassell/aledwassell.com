import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {AfterViewInit} from '@angular/core';
import {Link} from '../../_interfaces/link';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, AfterViewInit {
    @ViewChild('list', { static: true }) elementLink: ElementRef;
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
            heading: '/wikipedia_viewer/',
            aLink: 'https://aledwassell.github.io/wikipedia_viewer/'
        },
        {
            heading: '/giphy_api/',
            aLink: 'https://aledwassell.github.io/gif-app/'
        },
        {
            heading: '/weather_api/',
            aLink: 'https://aledwassell.github.io/local-weather/'
        },
        {
            heading: '/responsive/',
            aLink: 'https://aledwassell.github.io/responsive/module_3/'
        },
        {
            heading: '/quote_maker/',
            aLink: 'https://aledwassell.github.io/quoter/'
        },
        {
            heading: '/todos_app/',
            aLink: 'https://aledwassell.github.io/app/'
        },
        {
            heading: '/david_bowie/',
            aLink: 'https://aledwassell.github.io/david_bowie_tribute/'
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
