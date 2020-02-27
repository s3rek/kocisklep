import { Component } from '@angular/core';
import { faCoffee, faShoppingCart, faSignInAlt, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'kocisklep';
  faShoppingCart = faShoppingCart;
  faSignInAlt=faSignInAlt;
  faArrowCircleRight=faArrowCircleRight;
}
