import { Component, OnInit } from '@angular/core';
import { faCoffee, faShoppingCart, faSignInAlt, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-productgrid',
  templateUrl: './productgrid.component.html',
  styleUrls: ['./productgrid.component.css']
})
export class ProductgridComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  
  constructor() { }



  ngOnInit() {
  }
  slides = [
    {img: "assets/cat1.jpg"},
    {img: "assets/cat2.jpg"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }

}
