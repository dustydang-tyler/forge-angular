// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { defineOptionGroupComponent } from '@tylertech/forge';

import { OptionGroupComponent } from './option-group.component';

@NgModule({
	imports: [CommonModule],
	declarations: [OptionGroupComponent],
	exports: [OptionGroupComponent]
})
export class ForgeOptionGroupModule {
	constructor() {
		defineOptionGroupComponent();
	}
}