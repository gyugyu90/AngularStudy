import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-product-alerts', // html에서 쓰고 싶을 때
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product; // html에서 주입 받을 때
  @Output() notify = new EventEmitter(); // html로 보낼 때! -- notify(1) 정의

  constructor() { }

  ngOnInit() {
  }

}