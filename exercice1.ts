// Exercice 1
console.log('----- NEW -----')
const numberArray: number[] = [10, 25, 3, 17, 8, 42];
numberArray.push(14);
numberArray.splice(1,1);
console.log(`numberArray after splice ${numberArray}`);
numberArray[2] = 9;
console.log(`numberArray before index research ${numberArray}`);
console.log(`index de la valeur 17 ${numberArray.indexOf(17)}`);

const filtered = numberArray.filter(e => e % 2 == 0);

const sum = (res: number, current: number) => res + current;
console.log(`numberArray sum ${numberArray.reduce(sum)}`);
console.log(`filtered sum ${filtered.reduce(sum)}`);


console.log(`numberArray final result ${numberArray}`);
console.log(`filtered final result ${filtered}`);