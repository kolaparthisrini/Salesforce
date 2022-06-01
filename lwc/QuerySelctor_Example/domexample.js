import { LightningElement } from "lwc";

export default class Domexample extends LightningElement {
  handleValidate() {
    let customErrorMessage = "Please Enter the Data";
    this.template.querySelectorAll("lightning-input").forEach((item) => {
      let value = item.value;
      let currentLabel = item.label;
      if (!value) {
        item.setCustomValidity(customErrorMessage + " " + currentLabel);
      } else {
        item.setCustomValidity("");
      }
      item.reportValidity();
    });
  }
}
