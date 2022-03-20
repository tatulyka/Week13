"use strict";
function Hello() {
    let UserName = prompt ('Как тебя зовут?');  
    alert (`Привет, ${UserName} !`);
}

 function CulcSumm() {
   let FirstVar = prompt ('Введите первое слагаемое');
   let SecondVar = prompt ('Введите второе слагаемое');
   let Summ = +FirstVar + +SecondVar;
   alert(Summ);
   }
 function CulcSubtraction() {
   let FirstVar = prompt ('Введите уменьшаемое');
   let SecondVar = prompt ('Введите вычитаемое');
   let Subtraction = FirstVar - SecondVar;
   alert(Subtraction);
   }
 function CulcMultipl() {
   let FirstVar = prompt ('Введите первый множитель');
   let SecondVar = prompt ('Введите второй множитель');
   let Multipl = FirstVar * SecondVar;
   alert(Multipl);  
   }
 function CulcDivision() {
   let FirstVar = prompt ('Введите делимое');
   let SecondVar = prompt ('Введите делитель');
   let Division = FirstVar / SecondVar;
   alert(Division);
   }



