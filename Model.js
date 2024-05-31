const fs = require('fs').promises;

class Model {
  static async readFile() {
    const arrOfQuest = (await fs.readFile('./topics/quest1.txt', 'utf-8')).split('\n');
    return arrOfQuest;
  }

  static async readAnotherFile() {
    const arrOfAnsw = ((await fs.readFile('./topics/whales.txt', 'utf-8')).split('\n'));
    return arrOfAnsw;
  }
}

module.exports = Model;
