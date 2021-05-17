import { MaterialComponent } from "./../../projects/angular-material-formio/src/lib/components/MaterialComponent";
/**
 * This file demonstrates how to create a custom component in Angular Material
 */
// import { Components, MaterialComponent, registerComponent } from '@formio/angular-material';
import { Component } from "@angular/core";
import { registerComponent } from "projects/angular-material-formio/src/public-api";
@Component({
  template: "<b>My Custom Component</b>",
})
export class MaterialCustomComponent extends MaterialComponent {
  // Custom Material logic goes here.
}
registerComponent("my-custom-component", MaterialCustomComponent);
