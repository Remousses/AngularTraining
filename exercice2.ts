// Exercice 2
console.log('----- NEW -----')

function methode1(myArray: number[]): void {
    myArray.forEach(e => console.log(e));
}

function methode2(myArray: number[], callback: any): void {
    myArray.forEach(e => callback(e, ));
}
const numberArray: number[] = [10,13,20]
methode1(numberArray)

methode2(numberArray, (e: number, o?: number) => {
    console.log(`callback * 2 ${e * 2}`)
    return e;
})
methode2(numberArray, (e: number, o?: number) => {
    console.log(`callback filter ${e % 2 == 0}`)
    return e;
})