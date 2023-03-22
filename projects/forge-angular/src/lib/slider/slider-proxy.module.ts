// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { defineSliderComponent } from '@tylertech/forge';

import { SliderComponent } from './slider.component';

@NgModule({
	imports: [CommonModule],
	declarations: [SliderComponent],
	exports: [SliderComponent]
})
export class ForgeSliderProxyModule {
	constructor() {
		defineSliderComponent();
	}
}