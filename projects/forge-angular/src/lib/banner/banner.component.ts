// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { BannerComponent as BannerComponentCustomElement, defineBannerComponent } from '@tylertech/forge';

/** The custom element class behind the `<forge-banner>` element. */
@Component({
  selector: 'forge-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BannerComponent {

	/** Controls whether the component is dismissed (hidden) or not. */
	@Input()
	public set dismissed(value: BannerComponentCustomElement['dismissed'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.dismissed = value != null && `${value}` !== 'false';
		});
	}

	public get dismissed(): BannerComponentCustomElement['dismissed'] {
		return this.elementRef.nativeElement.dismissed;
	}

	/** Controls the visibility of the dismiss button. */
	@Input()
	public set canDismiss(value: BannerComponentCustomElement['canDismiss'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.canDismiss = value != null && `${value}` !== 'false';
		});
	}

	public get canDismiss(): BannerComponentCustomElement['canDismiss'] {
		return this.elementRef.nativeElement.canDismiss;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<BannerComponentCustomElement>,
		protected zone: NgZone
	) {
		defineBannerComponent();
		changeDetectorRef.detach();
	}
}