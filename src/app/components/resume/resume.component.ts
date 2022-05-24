import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-resume',
    template: `
        <!-- <pdf-viewer [src]="pdfSrc"
                    [render-text]="true"
                    style="display: block;"
        ></pdf-viewer> -->
    `,
    styles: []
})
export class ResumeComponent {
    pdfSrc = 'assets/aledwassell_CV.pdf';
}
