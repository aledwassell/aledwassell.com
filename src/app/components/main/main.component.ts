import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Link, UiLink } from '../../models/link';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '50px',
          fontSize: '2em',
        })
      ),
      state(
        'closed',
        style({
          height: '23px',
        })
      ),
      transition('open => closed', [animate('0.3s ease-in-out')]),
      transition('closed => open', [animate('0.3s 0.2s ease-in-out')]),
    ]),
  ],
})
export class MainComponent {
  math = Math;
  links: Observable<UiLink[]>;

  constructor(afs: AngularFirestore) {
    this.links = afs
      .collection<Link>('portfolio-sites')
      .valueChanges()
      .pipe(map((links) => links.filter((link) => link.label && link.url)));
  }
}
