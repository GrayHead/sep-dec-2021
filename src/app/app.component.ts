import {
  AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {InnerComponent} from "./compoents/inner/inner.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked, AfterViewInit, OnInit, DoCheck, OnDestroy {


  title = 'sep-dec-2021';


  // access to child compoent
  @ViewChild(InnerComponent)
  inner: InnerComponent;


  constructor() {
    console.log('constructor');
    // this.inner.asd = '123213'
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('changes', changes);
  // }


  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }


  changeTitle() {
    this.title = 'new title';
  }

  ngAfterViewInit(): void {
    console.log(this.inner.asd);
  }

  ngAfterViewChecked(): void {
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
