// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { defineStackComponent } from '@tylertech/forge';

import { StackComponent } from './stack.component';

@NgModule({
	imports: [CommonModule],
	declarations: [StackComponent],
	exports: [StackComponent]
})
export class ForgeStackModule {
	constructor() {
		defineStackComponent();
	}
}