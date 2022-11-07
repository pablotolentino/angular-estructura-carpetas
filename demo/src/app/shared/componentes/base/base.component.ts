import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-base',
  template: ''
})
export class BaseComponent implements OnDestroy {

  constructor() { 
    console.log('entra construcción base');
  }


  ngOnDestroy(): void {
    console.log('OnDestroy base');
  }
 

}
