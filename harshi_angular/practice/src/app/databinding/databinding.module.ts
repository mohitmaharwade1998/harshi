import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabindingRoutingModule } from './databinding-routing.module';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

console.log('databinding')

@NgModule({
  declarations: [
    DatabindingComponent  

  ],
  imports: [
    CommonModule,
    DatabindingRoutingModule,
    SharedModule


   
  ]
})
export class DatabindingModule { 
 }
