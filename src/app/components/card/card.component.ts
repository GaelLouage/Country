import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() img:string = "";
@Input() country:string ="";
@Input() region:string = "";
@Input() capital:string ="";
@Input() population:number =0;
  constructor() { }

  ngOnInit(): void {
  }

}
