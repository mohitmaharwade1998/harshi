import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';
  name!: string;
  name2:any;
  data:any

  constructor(private router:Router) {
    console.log('constructor ');

  }

   abc() {
    this.name = "harshita"
  }

  ngOnInit() {
     this.abc()

    this.name = 'mohit';

  }

  user(){
    this.router.navigateByUrl('/user')
  }
 
}
