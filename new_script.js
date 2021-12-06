'use strict';
const employers = [
  'АртеМ',
  'максим',
  'Владимир',
  'сергей',
  'НикиТа',
  'евГений',
  ' Дарья',
  ' ',
  'виктория ',
  'ЕкаТерина',
  '',
  ' Андрей ',
  'КИРИЛЛ',
];
const nameCourse = 'Базовый React';
const data = {
  cash: [3, 8, 3],
  react: ['JSX', 'components', 'props', 'state', 'hooks'],
  add: ['styled-components', 'firebase'],
};

class Business {
  constructor({ data, course, director, teacher, employers = [] }) {
    this.data = data;
    this.course = course;
    this.director = director;
    this.teacher = teacher;
    this.sumTech = data;
    this.allModule = data.cash;
    this.command = employers;
  }
  get teacher() {
    return this._teacher;
  }
  set teacher(teacher) {
    this._teacher = teacher || 'Максим';
  }
  get sumTech() {
    return this._sumTech;
  }
  set sumTech(data) {
    this._sumTech = [...data.react, ...data.add, ' и другие'].join(' ');
  }

  get allModule() {
    return this._allModule;
  }

  set allModule(cash) {
    this._allModule = cash.reduce((total, item) => total + item, 0);
  }
  get command() {
    return this._command;
  }
  set command(employers) {
    let command = employers.filter((employer) => employer.length > 0 && employer.trim() !== '');
    this._command = command.map((member) => {
      let [firstChar, ...secondChars] = member.toLowerCase().trim();
      return firstChar.toUpperCase() + secondChars.join('');
    });
  }
  getDescription() {
    console.log(
      `Стартуем новый курс: "${this.course}". Владелец: ${this.director}, преподаватель: ${this.teacher}. Всего уроков: ${this.allModule}.
Команда Академии: ${this.command}`
    );
    console.log(`Первое что изучим будет ${this.data.react[0]}. Он очень похож на HTML!`);
    console.log(`Технологии которые мы изучим:\n${this.sumTech}`);
  }
}

const business = new Business({ director: 'Артем', course: nameCourse, data, employers });

business.getDescription();
