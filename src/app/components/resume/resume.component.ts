import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-resume',
    template: `
        [pdf view]
        <!-- <pdf-viewer [src]="pdfSrc"
                    [render-text]="true"
                    style="display: block;"
        ></pdf-viewer> -->
    `,
    styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
    pdfSrc = 'assets/aledwassell_CV.pdf';

    constructor() {
    }

    ngOnInit() {
    }

}
