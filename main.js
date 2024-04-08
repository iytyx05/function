// 1.
// Создать функцию, которая будет принимать 3 числа в качестве аргументов, функция должна возвращать сумму первых двух чисел разделённую на третье число(использовать function declaration, а также реализовать проверку на то, что третье число не является нулем, если это ноль, то просто возвратить результат сложения первого и второго числа)s
// function arrSum(num1, num2, num3) {
//     if(num3 == 0){
//         return num1 + num2
//     } else {
//         return (num1 + num2) / num3
//     }
// }
// console.log(arrSum(7, 5, 0))

// 2.
    // Создать функцию, которая принимает в качестве аргумента массив со строками и в каком регистре нужно вернуть данные, строки могут быть записаны в любом регистре, задача: на основе выбора регистра, возвращать либо массив со строками в верхнем регистре, либо в нижнем регистре
    // function uppLow(string1, string2) {
    //     if (caseType === 'upper') {
    //         return strings.map(str => str.toUpperCase());
    //     } else if (caseType === 'lower') {
    //         return strings.map(str => str.toLowerCase());
    //     } 
    // }
    
    // const strings = ['Hello', 'WORLD', 'JavaScript'];
    // console.log(uppLow(strings, 'upper'));
    

// 3.
// Создать калькулятор используя функции, должны быть доступны операции(+, -, /, *), также должна быть функция-менеджер, которая будет принимать 2 числа и операцию, а затем вызывать нужную функцию и возвращать результат
// function plus(x, y) {
//   return x + y;
// }

// function minus(x, y) {
//   return x - y;
// }

// function umnoj(x, y) {
//   return x * y;
// }

// function del(x, y) {
//   if (y === 0) {
//       return "Деление на ноль невозможно";
//   }
//   return x / y;
// }

// function calculate(x, y, operation) {
//   switch (operation) {
//       case '+':
//           return plus(x, y);
//       case '-':
//           return minus(x, y);
//       case '*':
//           return umnoj(x, y);
//       case '/':
//           return del(x, y);
//       default:
//           return "Недопустимая операция";
//   }
// }
// let result = calculate(5, 3);
// console.log("Результат: " + result);

// 4.
// Дан массив с объектами
// let users = [
//     { name: 'Jack', age: 35, work: 'IT-backend developer' },
//     { name: 'Helen', age: 35, work: 'Nurse' },
//     { name: 'Bob', age: 35, work: 'Driver' },
//     { name: 'Jessica', age: 35, work: 'IT-frontend developer' },
//     { name: "Hel'ga", age: 35, work: 'IT-HR' },
//   ];
//   function sendWork(users) {
//     let itUsers = users.filter(user => user.work.includes('IT'));
//     itUsers.forEach(user => {
//         console.log(`${user.name}, приглашаем вас принять участие в акции в магазине компьютерной техники!`);
//     });
// }

// console.log(sendWork(users));

  // задача, создать функцию, которая будет рассылать сообщения пользователям, сообщая о акции в магазине компьютерной техники, отправлять сообщения нужно только тем людям, которые тем или иным образом относятся к IT-сфере
  
  // 5.
  // Создать функцию, которая будет рассчитывать расход топлива автомобиля, будет принимать 2 аргумента 1-й сколько всего километров проехали, второй сколько понадобилось топлива на это, затем функция должна рассчитать сколько ушло топлива на 100 км и вернуть результат вида: 'На 100км было расходовано 10л горючего'
  
//   function calculate(elem1, elem2) {
//     let fuel = (elem1 / elem2) * 100;
//     return `На 100 км было расходовано ${fuel.toFixed(2)} л горючего`;
// }

// let dist = 500; 
// let fuelUsed = 50; 
// console.log(calculate(dist, fuelUsed));


  // 6.
  // Расчет премии сотрудникам, дан массив с объектами
//   let employees = [
//     { name: 'Jack', salary: 10000, overTime: 4 },
//     { name: 'Tom', salary: 15000, overTime: 3 },
//     { name: 'Jessica', salary: 20000, overTime: 9 },
//     { name: 'Helen', salary: 25000, overTime: 2 },
//     { name: 'Peter', salary: 30000, overTime: 7 },
//   ];

//   function calculate(employees) {
//     for (let i = 0; i < employees.length; i++) {
//         let bonus = employees[i].overTime * 200;
//         employees[i].salary += bonus;
//         delete employees[i].overTime;
//     }
//     return employees;
// }
// console.log(calculate(employees));
  // salary- это заработная плата в месяц, overTime- количество часов, которое сотрудник взял сверхурочно, задача: создать функцию, которая будет добавлять к основной зарплате сверхурочное время(1час=200$), функция должна принимать массив с объектами и возвращать также массив, но уже с измененными данными пример: [{name: 'Jack', salary: 10000, overTime: 4}] -> [{name: 'Jack', salary: 10800}]  
  

  // 7.
  // Создать функцию, которая в качестве аргумента будет принимать массив со строками и числами, задача, отсортировать числа в отдельный массив, а строки в отдельный и распечатать оба массива
  
  // 8.
  // Дан массив
//   let students = [
//     { student: 'Jack', marks: 43 },
//     { student: 'Tom', marks: 92 },
//     { student: 'Helen', marks: 85 },
//     { student: 'Peter', marks: 58 },
//     { student: 'Jessica', marks: 78 },
//   ];

//   function sortStudents(students) {
//     students.sort((a, b) => b.marks - a.marks);
//     return students;
// }
// console.log(sortStudents(students));
  // задача, создать фуункцию, которая будет в качестве аргумента принимать массив такого вида как указан выше, и будет возвращать отсортированный массив(сортировать по убыванию оценок, используйте sort())
  
  // 9. EXTRA
  // Дан пустой массив, необходимо использовать его в качестве базы данных для объектов типа {title: 'str', price: num, category: 'str'}, задача реализовать полный CRUD(create(должна быть возможность создавать данные, в нашем случае объекты), read(возможность получения/чтения данных), update(изменение данных(можно использовать индекс)), delete(удаление данных(можно использовать индекс))), за каждое действие должна отвечать отдельная функция