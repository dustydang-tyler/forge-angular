// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { defineCalendarComponent } from '@tylertech/forge';

import { CalendarComponent } from './calendar.component';

@NgModule({
	imports: [CommonModule],
	declarations: [CalendarComponent],
	exports: [CalendarComponent]
})
export class ForgeCalendarModule {
	constructor() {
		defineCalendarComponent();
	}
}