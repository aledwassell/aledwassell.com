import { Link } from 'src/app/models/link';
import {Component, OnInit} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { filter, map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-resume',
    template: `
        <pdf-viewer
          *ngIf="(pdfSrc$ | async) as pdfSrc"
          [src]="pdfSrc"
          [render-text]="true"
        ></pdf-viewer>
    `,
    styles: [`pdf-viewer {height: 100%;}`]
})
export class ResumeComponent {
  pdfSrc$: Observable<string>;

  constructor(afs: AngularFirestore) {
    this.pdfSrc$ = afs.collection<Link>('resume-link').valueChanges()
    .pipe(
      filter(l => !!l.length),
      map(links => links[0].url),
    );
  }
}
