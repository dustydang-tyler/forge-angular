// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { OptionGroupComponent as OptionGroupComponentCustomElement, defineOptionGroupComponent } from '@tylertech/forge';

/** The custom element class behind the `<forge-option-group>` element. */
@Component({
  selector: 'forge-option-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class OptionGroupComponent {

	/** Gets/sets the label of this option group. */
	@Input()
	public set label(value: OptionGroupComponentCustomElement['label']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.label = value;
		});
	}

	public get label(): OptionGroupComponentCustomElement['label'] {
		return this.elementRef.nativeElement.label;
	}

	/** The child options of this group. */
	@Input()
	public set options(value: OptionGroupComponentCustomElement['options']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.options = value;
		});
	}

	public get options(): OptionGroupComponentCustomElement['options'] {
		return this.elementRef.nativeElement.options;
	}

	/** The builder function for the group content. */
	@Input()
	public set builder(value: OptionGroupComponentCustomElement['builder']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.builder = value;
		});
	}

	public get builder(): OptionGroupComponentCustomElement['builder'] {
		return this.elementRef.nativeElement.builder;
	}

	/** Gets/sets the optional group value. */
	@Input()
	public set value(value: OptionGroupComponentCustomElement['value']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.value = value;
		});
	}

	public get value(): OptionGroupComponentCustomElement['value'] {
		return this.elementRef.nativeElement.value;
	}

	/** The text content for the group. */
	@Input()
	public set text(value: OptionGroupComponentCustomElement['text']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.text = value;
		});
	}

	public get text(): OptionGroupComponentCustomElement['text'] {
		return this.elementRef.nativeElement.text;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<OptionGroupComponentCustomElement>,
		protected zone: NgZone
	) {
		defineOptionGroupComponent();
		changeDetectorRef.detach();
	}
}
