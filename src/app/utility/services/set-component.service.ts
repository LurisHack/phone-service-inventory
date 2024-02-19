import {createCustomElement} from "@angular/elements";
import {Injectable, Injector} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable()
export class SetComponentService {
  constructor(private injector: Injector, private domSanitizer: DomSanitizer) {
  }

  setComponent(component: any, selector: string){
      const alertElement = createCustomElement(component, {injector: this.injector})
      if (!customElements.get(selector)){
      customElements.define(selector, alertElement)
      }

      console.log(`<${selector}></${selector}>`)
       return  this.domSanitizer.bypassSecurityTrustHtml(`<${selector}></${selector}>`);
    }

}
