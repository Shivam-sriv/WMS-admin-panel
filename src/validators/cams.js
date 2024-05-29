import { Validators } from "./validator";

export class Cams extends Validators {
  constructor(object) {
    super(object, {
      FOLIOCHK: false,
      PRODUCT: false,
      GUARD_PAN: false,
      PAN_NO: false,
    });
  }
}
