import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Images=['./assets/carousel1.jpg','./assets/carousel1.jpg'];
CardImages=['./assets/impre1.jpg','./assets/cube1.jpg','./assets/abstra1.jpg', './assets/expre1.jpg','./assets/Surre1.jpg','./assets/modern1.jpg'];
CardNames=['Impressionism','Cubism','Abstract','Expressionism','Surrealism','Modernism'];
  constructor() { }

  ngOnInit(): void {
  }

}
