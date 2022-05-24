import {Component, ViewChild, ElementRef} from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Link} from '../../models/link';
import { tap } from 'rxjs';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.sass']
})
export class MainComponent {
  math = Math;
  links: Observable<Link[]>;

  constructor(afs: AngularFirestore) {
    this.links = afs.collection<Link>('portfolio-sites').valueChanges();
  }
}
