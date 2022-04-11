import { Injectable, Injector } from '@angular/core';
import { Type, ComponentFactory, NgModuleRef } from '@angular/core';
import { IDialogComponent, DIALOG_CONSTANTS } from '@tylertech/forge';
import { DialogConfig } from './dialog-config';
import { DialogRef } from './dialog-ref';
import { DialogInjector } from './dialog-injector';
import { DynamicComponentService } from '../core/dynamic-component/dynamic-component.service';
import { IDynamicComponentRef } from '../core/dynamic-component/dynamic-component.service';

export interface IDialogOptions {
  backdropClose?: boolean;
  escapeClose?: boolean;
  fullscreen?: boolean;
  moveable?: boolean;
  moveTarget?: string;
  dialogClass?: string;
  attributes?: Map<string, string>;
  beforeCloseCallback?: () => Promise<boolean> | boolean;
}

/**
 * Provides facilities for working with a Forge dialog and placing dynamic components within it.
 */
@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private _dcs: DynamicComponentService, private _injector: Injector) {}

  /**
   * Displays a components within a Forge dialog instance.
   * @param component The component reference.
   * @param config The configuration to provide to the dynamic component as an injectable token.
   */
  public show<T, K>(component: Type<T> | ComponentFactory<T>, options?: IDialogOptions, config?: DialogConfig, moduleRef?: NgModuleRef<K>): DialogRef<T> {
    // Contains tokens that will be provided to components through our custom dialog injector
    const map = new WeakMap();

    // If we got a config, we should provide it as an injection token
    if (config) {
      map.set(DialogConfig, config);
    }

    // Create the Forge dialog element
    const dialogElement = document.createElement('forge-dialog');

    // Configure the dialog with the provided options
    if (options) {
      if (options.backdropClose !== undefined) {
        dialogElement.backdropClose = options.backdropClose;
      }
      if (options.escapeClose !== undefined) {
        dialogElement.escapeClose = options.escapeClose;
      }
      if (options.fullscreen !== undefined) {
        dialogElement.fullscreen = options.fullscreen;
      }
      if (options.moveable) {
        dialogElement.moveable = options.moveable;
        if (options.moveTarget) {
          dialogElement.moveTarget = options.moveTarget;
        }
      }
      if (options.dialogClass) {
        dialogElement.classList.add(options.dialogClass);
      }
      if (options.attributes) {
        options.attributes.forEach((value, key) => dialogElement.setAttribute(key, value));
      }
      if (options.beforeCloseCallback !== undefined) {
        dialogElement.beforeCloseCallback = options.beforeCloseCallback;
      }
    }

    // Create the ref that will allow the consumer to control the dialog
    const dialogRef = new DialogRef<T>(dialogElement);

    // Always provide the dialog ref as an injection token
    map.set(DialogRef, dialogRef);

    // Create and attach the dynamic component to the dialog element
    const dcRef = this._dcs.create(component, dialogElement, new DialogInjector(this._injector, map), moduleRef);
    dialogRef.componentInstance = dcRef.componentRef.instance;

    // Always destroy when the dialog is closed
    const sub = dialogRef.afterClosed.subscribe(() => {
      this._destroy(dialogElement, dcRef);
      sub.unsubscribe();
    });

    // Listen for clicks on the backdrop to destroy the dialog (if applicable)
    if (dialogElement.backdropClose) {
      dialogElement.addEventListener(DIALOG_CONSTANTS.events.CLOSE, () => {
        dialogRef.close();
        this._destroy(dialogElement, dcRef);
        sub.unsubscribe();
      });
    }

    // Appends the dialog element to the DOM
    dialogElement.open = true;

    return dialogRef;
  }

  /**
   * Removes a dialog from the DOM and destroys the component instance.
   * @param dialogInstance An instance of a Forge dialog element.
   * @param ref A reference to the dynamic component.
   */
  private _destroy<T>(dialogInstance: IDialogComponent, ref: IDynamicComponentRef<T>): void {
    dialogInstance.open = false;
    ref.destroy();
  }
}