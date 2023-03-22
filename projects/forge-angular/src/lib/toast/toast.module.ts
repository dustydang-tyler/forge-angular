// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { defineToastComponent } from '@tylertech/forge';

import { ToastComponent } from './toast.component';

@NgModule({
	imports: [CommonModule],
	declarations: [ToastComponent],
	exports: [ToastComponent]
})
export class ForgeToastModule {
	constructor() {
		defineToastComponent();
	}
}