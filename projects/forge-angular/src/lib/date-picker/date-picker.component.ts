// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { DatePickerComponent as DatePickerComponentCustomElement, defineDatePickerComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-date-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class DatePickerComponent {

	/** The forge-date-picker element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** The value of the date picker. */
	@Input()
	public set value(value: DatePickerComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.value = value;
		});
	}
	public get value(): DatePickerComponentCustomElement['value'] {
		return this.nativeElement.value;
	}

	/** The minimum date the calendar will allow. */
	@Input()
	public set min(value: DatePickerComponentCustomElement['min']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.min = value;
		});
	}
	public get min(): DatePickerComponentCustomElement['min'] {
		return this.nativeElement.min;
	}

	/** The maximum date the calendar will allow. */
	@Input()
	public set max(value: DatePickerComponentCustomElement['max']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.max = value;
		});
	}
	public get max(): DatePickerComponentCustomElement['max'] {
		return this.nativeElement.max;
	}

	/** The dates that are restricted from being selected. */
	@Input()
	public set disabledDates(value: DatePickerComponentCustomElement['disabledDates']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabledDates = value;
		});
	}
	public get disabledDates(): DatePickerComponentCustomElement['disabledDates'] {
		return this.nativeElement.disabledDates;
	}

	/** Whether the calendar dropdown is open. */
	@Input({ transform: booleanAttribute })
	public set open(value: DatePickerComponentCustomElement['open']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.open = value;
		});
	}
	public get open(): DatePickerComponentCustomElement['open'] {
		return this.nativeElement.open;
	}

	/** The CSS classes that are applied to the popup element. */
	@Input()
	public set popupClasses(value: DatePickerComponentCustomElement['popupClasses']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.popupClasses = value;
		});
	}
	public get popupClasses(): DatePickerComponentCustomElement['popupClasses'] {
		return this.nativeElement.popupClasses;
	}

	/** Whether the date picker is disabled or not. */
	@Input({ transform: booleanAttribute })
	public set disabled(value: DatePickerComponentCustomElement['disabled']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabled = value;
		});
	}
	public get disabled(): DatePickerComponentCustomElement['disabled'] {
		return this.nativeElement.disabled;
	}

	/** Whether the input mask is applied or not. */
	@Input({ transform: booleanAttribute })
	public set masked(value: DatePickerComponentCustomElement['masked']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.masked = value;
		});
	}
	public get masked(): DatePickerComponentCustomElement['masked'] {
		return this.nativeElement.masked;
	}

	/** The mask format that displayed in the input. Default is `MM/DD/YYYY`. */
	@Input()
	public set maskFormat(value: DatePickerComponentCustomElement['maskFormat']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.maskFormat = value;
		});
	}
	public get maskFormat(): DatePickerComponentCustomElement['maskFormat'] {
		return this.nativeElement.maskFormat;
	}

	/** Whether the mask format is displayed in the input or not. Only applies if `masked` is `true`. */
	@Input({ transform: booleanAttribute })
	public set showMaskFormat(value: DatePickerComponentCustomElement['showMaskFormat']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.showMaskFormat = value;
		});
	}
	public get showMaskFormat(): DatePickerComponentCustomElement['showMaskFormat'] {
		return this.nativeElement.showMaskFormat;
	}

	/** The type for the `value` property and `forge-date-picker-change` event. */
	@Input()
	public set valueMode(value: DatePickerComponentCustomElement['valueMode']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.valueMode = value;
		});
	}
	public get valueMode(): DatePickerComponentCustomElement['valueMode'] {
		return this.nativeElement.valueMode;
	}

	/** Whether the native input will be notified of value changes via the `input` and `change` events. */
	@Input({ transform: booleanAttribute })
	public set notifyInputValueChanges(value: DatePickerComponentCustomElement['notifyInputValueChanges']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.notifyInputValueChanges = value;
		});
	}
	public get notifyInputValueChanges(): DatePickerComponentCustomElement['notifyInputValueChanges'] {
		return this.nativeElement.notifyInputValueChanges;
	}

	/** Whether to allow an invalid date to be input. When true, the date picker will not clear out the value of the input if the date was invalid (i.e. could not be parsed). */
	@Input({ transform: booleanAttribute })
	public set allowInvalidDate(value: DatePickerComponentCustomElement['allowInvalidDate']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.allowInvalidDate = value;
		});
	}
	public get allowInvalidDate(): DatePickerComponentCustomElement['allowInvalidDate'] {
		return this.nativeElement.allowInvalidDate;
	}

	/** Whether the today button is visible in the popup. */
	@Input({ transform: booleanAttribute })
	public set showToday(value: DatePickerComponentCustomElement['showToday']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.showToday = value;
		});
	}
	public get showToday(): DatePickerComponentCustomElement['showToday'] {
		return this.nativeElement.showToday;
	}

	/** Whether the clear button is visible in the popup. */
	@Input({ transform: booleanAttribute })
	public set showClear(value: DatePickerComponentCustomElement['showClear']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.showClear = value;
		});
	}
	public get showClear(): DatePickerComponentCustomElement['showClear'] {
		return this.nativeElement.showClear;
	}

	/** The callback to use for parsing a date value string to a `Date` object. */
	@Input()
	public set parseCallback(value: DatePickerComponentCustomElement['parseCallback']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.parseCallback = value;
		});
	}
	public get parseCallback(): DatePickerComponentCustomElement['parseCallback'] {
		return this.nativeElement.parseCallback;
	}

	/** The callback to use for formatting `Date` value to a custom string format. */
	@Input()
	public set formatCallback(value: DatePickerComponentCustomElement['formatCallback']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.formatCallback = value;
		});
	}
	public get formatCallback(): DatePickerComponentCustomElement['formatCallback'] {
		return this.nativeElement.formatCallback;
	}

	/** The callback to use when altering default mask entry. */
	@Input()
	public set prepareMaskCallback(value: DatePickerComponentCustomElement['prepareMaskCallback']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.prepareMaskCallback = value;
		});
	}
	public get prepareMaskCallback(): DatePickerComponentCustomElement['prepareMaskCallback'] {
		return this.nativeElement.prepareMaskCallback;
	}

	/** The days of the week to disable from selection. */
	@Input()
	public set disabledDaysOfWeek(value: DatePickerComponentCustomElement['disabledDaysOfWeek']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disabledDaysOfWeek = value;
		});
	}
	public get disabledDaysOfWeek(): DatePickerComponentCustomElement['disabledDaysOfWeek'] {
		return this.nativeElement.disabledDaysOfWeek;
	}

	/** The callback to use for testing whether a specific date should be disabled or not. */
	@Input()
	public set disableDayCallback(value: DatePickerComponentCustomElement['disableDayCallback']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.disableDayCallback = value;
		});
	}
	public get disableDayCallback(): DatePickerComponentCustomElement['disableDayCallback'] {
		return this.nativeElement.disableDayCallback;
	}

	/** The year range. */
	@Input()
	public set yearRange(value: DatePickerComponentCustomElement['yearRange']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.yearRange = value;
		});
	}
	public get yearRange(): DatePickerComponentCustomElement['yearRange'] {
		return this.nativeElement.yearRange;
	}

	/** The locale to use. */
	@Input()
	public set locale(value: DatePickerComponentCustomElement['locale']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.locale = value;
		});
	}
	public get locale(): DatePickerComponentCustomElement['locale'] {
		return this.nativeElement.locale;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<DatePickerComponentCustomElement>,
		protected zone: NgZone
	) {
		defineDatePickerComponent();
		changeDetectorRef.detach();
	}
}
