// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { IconButtonComponent as IconButtonComponentCustomElement, defineIconButtonComponent } from '@tylertech/forge';

/** The custom element class behind the `<forge-icon-button>` element. */
@Component({
  selector: 'forge-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IconButtonComponent {

	/** Gets/sets whether the button is togglable. */
	@Input()
	public set toggle(value: IconButtonComponentCustomElement['toggle'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.toggle = value != null && `${value}` !== 'false';
		});
	}

	public get toggle(): IconButtonComponentCustomElement['toggle'] {
		return this.elementRef.nativeElement.toggle;
	}

	/** Gets/sets the toggled state of the icon button. Only applies when `toggle = true`. */
	@Input()
	public set isOn(value: IconButtonComponentCustomElement['isOn'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.isOn = value != null && `${value}` !== 'false';
		});
	}

	public get isOn(): IconButtonComponentCustomElement['isOn'] {
		return this.elementRef.nativeElement.isOn;
	}

	/** Gets/sets whether the icon button is dense. */
	@Input()
	public set dense(value: IconButtonComponentCustomElement['dense'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.dense = value != null && `${value}` !== 'false';
		});
	}

	public get dense(): IconButtonComponentCustomElement['dense'] {
		return this.elementRef.nativeElement.dense;
	}

	/** Controls the density level. 1 (least dense) to 6 (most dense). */
	@Input()
	public set densityLevel(value: IconButtonComponentCustomElement['densityLevel'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.densityLevel = +value;
		});
	}

	public get densityLevel(): IconButtonComponentCustomElement['densityLevel'] {
		return this.elementRef.nativeElement.densityLevel;
	}


	public layout(...args: Parameters<IconButtonComponentCustomElement['layout']>): ReturnType<IconButtonComponentCustomElement['layout']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.layout(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<IconButtonComponentCustomElement>,
		protected zone: NgZone
	) {
		defineIconButtonComponent();
		changeDetectorRef.detach();
	}
}