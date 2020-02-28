import { Component, OnInit } from '@angular/core';
import { faCoffee, faShoppingCart, faSignInAlt, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'kocisklep';
  faShoppingCart = faShoppingCart;
  faSignInAlt=faSignInAlt;
  faArrowCircleRight=faArrowCircleRight;
  public isMenuCollapsed = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
