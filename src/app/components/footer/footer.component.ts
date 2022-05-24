import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  @Input() links: Link[] | null = null;
  public year: number = new Date().getFullYear();
}
