import { Component, OnInit } from '@angular/core';
import { faPaw} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopitem',
  templateUrl: './shopitem.component.html',
  styleUrls: ['./shopitem.component.css']
})
export class ShopitemComponent implements OnInit {
  fapaw=faPaw;

  constructor() { }

  ngOnInit(): void {
  }

}
