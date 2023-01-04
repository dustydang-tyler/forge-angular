// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { SplitViewComponent as SplitViewComponentCustomElement, defineSplitViewComponent } from '@tylertech/forge';

/** The custom element class behind the `<forge-split-view>` element. */
@Component({
  selector: 'forge-split-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class SplitViewComponent {

	/** Whether child split view panels are laid out and resize horizontally or vertically. */
	@Input()
	public set orientation(value: SplitViewComponentCustomElement['orientation']) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.orientation = value;
		});
	}

	public get orientation(): SplitViewComponentCustomElement['orientation'] {
		return this.elementRef.nativeElement.orientation;
	}

	/** Whether child split view panels have resize interactions disabled or enabled. */
	@Input()
	public set disabled(value: SplitViewComponentCustomElement['disabled'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.disabled = value != null && `${value}` !== 'false';
		});
	}

	public get disabled(): SplitViewComponentCustomElement['disabled'] {
		return this.elementRef.nativeElement.disabled;
	}

	/** Whether child split view panels can be closed via keyboard interaction. */
	@Input()
	public set allowClose(value: SplitViewComponentCustomElement['allowClose'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.allowClose = value != null && `${value}` !== 'false';
		});
	}

	public get allowClose(): SplitViewComponentCustomElement['allowClose'] {
		return this.elementRef.nativeElement.allowClose;
	}

	/** Whether child split view panels automatically close when they reach a size of 0. */
	@Input()
	public set autoClose(value: SplitViewComponentCustomElement['autoClose'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.autoClose = value != null && `${value}` !== 'false';
		});
	}

	public get autoClose(): SplitViewComponentCustomElement['autoClose'] {
		return this.elementRef.nativeElement.autoClose;
	}

	/** The size at which panels auto close. */
	@Input()
	public set autoCloseThreshold(value: SplitViewComponentCustomElement['autoCloseThreshold'] | string) {
		this.zone.runOutsideAngular(() => {
			this.elementRef.nativeElement.autoCloseThreshold = +value;
		});
	}

	public get autoCloseThreshold(): SplitViewComponentCustomElement['autoCloseThreshold'] {
		return this.elementRef.nativeElement.autoCloseThreshold;
	}

	/** Arranges split view panels to avoid overlapping during animations. */
	public layerSlottedPanels(...args: Parameters<SplitViewComponentCustomElement['layerSlottedPanels']>): ReturnType<SplitViewComponentCustomElement['layerSlottedPanels']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.layerSlottedPanels(...args));
	}

	/** Removes presentation data set during an animation. */
	public unlayerSlottedPanels(...args: Parameters<SplitViewComponentCustomElement['unlayerSlottedPanels']>): ReturnType<SplitViewComponentCustomElement['unlayerSlottedPanels']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.unlayerSlottedPanels(...args));
	}

	/** Updates the provided characteristics of each slotted panel. */
	public update(...args: Parameters<SplitViewComponentCustomElement['update']>): ReturnType<SplitViewComponentCustomElement['update']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.update(...args));
	}

	/** Resizes panels within the split view to avoid overflow. */
	public refit(...args: Parameters<SplitViewComponentCustomElement['refit']>): ReturnType<SplitViewComponentCustomElement['refit']> {
		return this.zone.runOutsideAngular(() => this.elementRef.nativeElement.refit(...args));
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<SplitViewComponentCustomElement>,
		protected zone: NgZone
	) {
		defineSplitViewComponent();
		changeDetectorRef.detach();
	}
}
