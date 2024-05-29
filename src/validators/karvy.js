import { Validators } from "./validator";

export class Karvy extends Validators {
  constructor(object) {
    super(object, {
      PRCODE: false,
      ACNO: false,
      PANGNO: false,
      GUARDPANNO: false,
    });
  }
}