import {Component, ViewChild, ElementRef} from '@angular/core';
import {Link} from '../../models/link';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.sass']
})
export class MainComponent {
    @ViewChild('list') elementLink: ElementRef | null = null;
    math = Math;
    viewHeight = 0;

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

    url = 'https://google.com'

}
