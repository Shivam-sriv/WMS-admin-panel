export class Validators {
  #singleObject;
  #maplist;
  valid = true;

  constructor(singleObject, mapList) {
    this.#singleObject = singleObject;
    this.#maplist = this.objectToMap(mapList);
  }

  objectToMap = (obj) => {
    const map = new Map();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        map.set(key, obj[key]);
      }
    }
    return map;
  };

  isKeysExist = () => {
    Object.keys(this.#singleObject).forEach((element) => {
      if (this.#maplist.has(element)) {
        this.#maplist.set(element, true);
      }
    });
    this.#maplist.forEach((value, key) => {
      if (!value) {
        this.valid = false;
      }
    });
  };
}
