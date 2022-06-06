import { LightningElement } from "lwc";
export default class HelloWorld extends LightningElement {
  greeting = "World";

  firstName = "";
  lastName = "";

  // new
  areDetailsVisible = false;

  handleChange(event) {
    const field = event.target.name;
    if (field === "firstName") {
      this.firstName = event.target.value;
    } else if (field === "lastName") {
      this.lastName = event.target.value;
    }
  }

  get uppercasedFullName() {
    return `${this.firstName} ${this.lastName}`.toUpperCase();
  }

  // new
  handleCheckBoxChange(event) {
    this.areDetailsVisible = event.target.checked;
  }

}
