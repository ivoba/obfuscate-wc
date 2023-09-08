/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ObfuscateLink {
        "decoder": (value: string) => string;
        "email": string;
        "facetime": string;
        "headers": Record<string, string>;
        "href": string;
        "sms": string;
        "tel": string;
    }
}
declare global {
    interface HTMLObfuscateLinkElement extends Components.ObfuscateLink, HTMLStencilElement {
    }
    var HTMLObfuscateLinkElement: {
        prototype: HTMLObfuscateLinkElement;
        new (): HTMLObfuscateLinkElement;
    };
    interface HTMLElementTagNameMap {
        "obfuscate-link": HTMLObfuscateLinkElement;
    }
}
declare namespace LocalJSX {
    interface ObfuscateLink {
        "decoder"?: (value: string) => string;
        "email"?: string;
        "facetime"?: string;
        "headers"?: Record<string, string>;
        "href"?: string;
        "sms"?: string;
        "tel"?: string;
    }
    interface IntrinsicElements {
        "obfuscate-link": ObfuscateLink;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "obfuscate-link": LocalJSX.ObfuscateLink & JSXBase.HTMLAttributes<HTMLObfuscateLinkElement>;
        }
    }
}
