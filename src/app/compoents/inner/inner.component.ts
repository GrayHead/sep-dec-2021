import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {


  asd = 'hello';

  constructor() {
  }

  ngOnInit(): void {
  }

}
