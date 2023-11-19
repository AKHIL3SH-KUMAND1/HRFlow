import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbCollapseModule
  ],
  exports:[
    NgbCollapseModule       
  ]
})
export class BootstrapModule { }
