
// 1. Є змінна х, якій ви надаєте довільне числове значення.
 //   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x= +prompt('zmina')
// if (x<=0){
//     document.write('<h1>nevirno</h1>');}
// else if(x>0){
//     document.write('<h1> virno</h1>')
// }

//2. Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

// let time= prompt('quarter year')
// if (time > 0 && time < 15) {
//     console.log(1);
// } else if (time>15 && time<30){
//     console.log(2)
// } else if (time>30 && time<45){
//     console.log(3)
// }else if (time>45 && time<59) {
//     console.log(4)
// }
// 3. У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day= prompt('decade of the month')
// if (day > 1 && day < 10) {
//     console.log(1);
// } else if (day>10 && day<20){
//     console.log(2)
// } else if (day>20 && day<31){
//     console.log(3)
// }


//  4. Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// switch ('4'){
//     case'1':
//         console.log('Monday');
//         break;
//     case'2':
//         console.log('Tuesday');
//         break;
//     case'3':
//         console.log('Wednesday');
//         break;
//     case'4':
//         console.log('Thursday');
//         break;
//     case'5':
//         console.log('Friday');
//         break;
//     case'6':
//         console.log('Saturday');
//         break;
//     case'7':
//         console.log('Sunday');
//         break;
//     default:
//         console.log('????')
// }
//  5. Користувач вводить або має два числа.
        //Потрібно знайти та вивести максимальне число з тих двох .
        //Також потрібно врахувати коли введені рівні числа.
let x1 = 6;
let x2 = 7;
console.log(x1 >= x2 ? x1 : x2)


//  6. є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let  x = prompt() || 'default'
// console.log(x)