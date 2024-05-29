import { read as xlsxRead, utils } from "xlsx";
import csv from "csvtojson";

export class Upload {
  #file
  #callback
  
  constructor(file, callback) {
    this.#file = file
    this.#callback = callback;
  }

  read() {
    if (this.#file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = e.target.result;
        const workbook = xlsxRead(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const content = utils.sheet_to_csv(worksheet);
        const jsonArray = await csv().fromString(content);
         this.#callback(jsonArray);
      };
      reader.readAsArrayBuffer(this.#file);
    }
  }

}

