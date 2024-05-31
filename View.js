const inquirer = require('inquirer');
const Model = require('./Model');
async function choise() {
  const b = await inquirer.prompt({
    type: 'list',
    name: 'Ваша категория:',
    message: 'Выберите категорию',
    choices: [
      { name: 'С подвохом' },
      { name: 'Киты' },
    ],
  });
  let arr = [];
  if (b['Ваша категория:'] === 'С подвохом') {
    arr = await Model.readFile();
  } else {
    arr = await Model.readAnotherFile();
  }
  for (let i = 0; i < arr.length; i += 3) {
    const a = await inquirer.prompt({
      type: 'list',
      name: 'Ваш ответ:',
      message: arr[i],
      choices: [
        { name: (arr[i + 2].split(','))[0] },
        { name: (arr[i + 2].split(','))[1] },
        { name: (arr[i + 2].split(','))[2] },
      ],
    });
    if (a['Ваш ответ:'] !== arr[i + 1]) {
      console.log('Вы не правы!\nВерный ответ:', arr[i + 1]);
    } else {
      console.log('Верно');
    }
  }
  const c = await inquirer.prompt({
    type: 'list',
    name: 'Ваш выбор',
    message: 'Хотите сыграть еще раз?',
    choices: [
      { name: 'Да' },
      { name: 'Нет' },
    ],
  });
  if (c['Ваш выбор'] === 'Да') {
    choise();
  } else {
    console.log('Приходите еще!');
  }
}
choise();