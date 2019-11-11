import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-drview',
  templateUrl: './drview.component.html',
  styleUrls: ['./drview.component.css']
})
export class DrviewComponent implements OnInit {
  selectedItemId: string;

  constructor(public route:Router) { }

  ngOnInit() {
  }

  onclick(value: string) {
    this.selectedItemId=value;
    if(value=='donate'){

    }else if(value=='Profile'){}

      else{

        this.route.navigate(['/home']);
    }

  }


}
