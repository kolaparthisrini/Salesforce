import { LightningElement, track } from "lwc";

export default class Simplecalculator extends LightningElement {
  @track
  output;
  @track
  a;
  @track
  b;

  textchange(event) {
    if (event.target.name === "a") this.a = event.target.value;
    if (event.target.name === "b") this.b = event.target.value;
  }

  //eval wil not work in all browsers.
  validity1(event) {
    
    if (event.target.name === "+") {
      this.output = parseInt(this.a, 10) + parseInt(this.b, 10);
    }
    
    if (event.target.name === "-") {
      this.output = parseInt(this.a, 10) - parseInt(this.b, 10);
    }
    
    if (event.target.name === "*") {
      this.output = parseInt(this.a, 10) * parseInt(this.b, 10);
    }

    if (event.target.name === "/") {
      this.output = parseInt(this.a, 10) / parseInt(this.b, 10);
    }
  }
}
