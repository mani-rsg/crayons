/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface FwLabel {
    /**
    * The type of the label
    */
    'type': string;
    /**
    * The text in the label
    */
    'value': string;
  }
  interface FwSpinner {
    /**
    * The size of the spinner - Options ['small' , 'default', 'medium', 'large']
    */
    'size': string;
  }
}

declare global {


  interface HTMLFwLabelElement extends Components.FwLabel, HTMLStencilElement {}
  var HTMLFwLabelElement: {
    prototype: HTMLFwLabelElement;
    new (): HTMLFwLabelElement;
  };

  interface HTMLFwSpinnerElement extends Components.FwSpinner, HTMLStencilElement {}
  var HTMLFwSpinnerElement: {
    prototype: HTMLFwSpinnerElement;
    new (): HTMLFwSpinnerElement;
  };
  interface HTMLElementTagNameMap {
    'fw-label': HTMLFwLabelElement;
    'fw-spinner': HTMLFwSpinnerElement;
  }
}

declare namespace LocalJSX {
  interface FwLabel extends JSXBase.HTMLAttributes<HTMLFwLabelElement> {
    /**
    * The type of the label
    */
    'type'?: string;
    /**
    * The text in the label
    */
    'value'?: string;
  }
  interface FwSpinner extends JSXBase.HTMLAttributes<HTMLFwSpinnerElement> {
    /**
    * The size of the spinner - Options ['small' , 'default', 'medium', 'large']
    */
    'size'?: string;
  }

  interface IntrinsicElements {
    'fw-label': FwLabel;
    'fw-spinner': FwSpinner;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


