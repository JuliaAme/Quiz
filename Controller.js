const Model = require('./Model');

class Controller {
  static async choise() {
    const arr = await Model.readFile();
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
}
Controller.choise();
