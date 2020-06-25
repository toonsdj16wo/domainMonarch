import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PhotoModule {
	photo:string;
	description:string;
	constructor (public title:string, public description:string){

	 }
	}
