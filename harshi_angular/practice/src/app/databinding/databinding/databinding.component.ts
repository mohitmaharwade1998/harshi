import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent {

  name = "mohit"
  no = 10;
 text='12'
 disablePoropert=false;
 value="";
 twowayDatabinding:any

  data(a: any) {
    console.log(a);

  }

  data1(a:any){
    console.log(a);
    
  }
  data2(a:any){
    console.log(a)
     let value = a.target.value;
     console.log(value);
     
  }

  data3(a: any) {
    console.log(a.value);

  }
  checkbox1(a:any){
    console.log(a.target.value);
    
  }

  myEvent(){
    console.log('mouse over');
    
  }

}
