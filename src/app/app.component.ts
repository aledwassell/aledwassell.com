import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Link } from './models/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  footerLinks$: Observable<Link[]>;

  constructor(afs: AngularFirestore) {
    this.footerLinks$ = afs.collection<Link>('social-media-links').valueChanges();
  }
}
