// This code was generated by the angular-custom-elements-schematic.  Any changes will be overwritten next time it runs.
import { booleanAttribute, Component, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Input } from '@angular/core';
import { BottomSheetComponent as BottomSheetComponentCustomElement, defineBottomSheetComponent } from '@tylertech/forge';

/**  */
@Component({
  selector: 'forge-bottom-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BottomSheetComponent {

	/** The forge-bottom-sheet element. */
	public readonly nativeElement = this.elementRef.nativeElement;

	/** Whether the bottom sheet is open. */
	@Input({ transform: booleanAttribute })
	public set open(value: BottomSheetComponentCustomElement['open']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.open = value;
		});
	}
	public get open(): BottomSheetComponentCustomElement['open'] {
		return this.nativeElement.open;
	}

	/** The mode of the bottom sheet. */
	@Input()
	public set mode(value: BottomSheetComponentCustomElement['mode']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.mode = value;
		});
	}
	public get mode(): BottomSheetComponentCustomElement['mode'] {
		return this.nativeElement.mode;
	}

	/** Whether the bottom sheet is persistent. */
	@Input({ transform: booleanAttribute })
	public set persistent(value: BottomSheetComponentCustomElement['persistent']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.persistent = value;
		});
	}
	public get persistent(): BottomSheetComponentCustomElement['persistent'] {
		return this.nativeElement.persistent;
	}

	/** Whether the bottom sheet is fullscreen. */
	@Input({ transform: booleanAttribute })
	public set fullscreen(value: BottomSheetComponentCustomElement['fullscreen']) {
		this.zone.runOutsideAngular(() => {
			this.nativeElement.fullscreen = value;
		});
	}
	public get fullscreen(): BottomSheetComponentCustomElement['fullscreen'] {
		return this.nativeElement.fullscreen;
	}

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		protected elementRef: ElementRef<BottomSheetComponentCustomElement>,
		protected zone: NgZone
	) {
		defineBottomSheetComponent();
		changeDetectorRef.detach();
	}
}
