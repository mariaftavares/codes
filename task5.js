let stringInput = "Maria Fernanda"

let newStringReverse = ''

for(let index = stringInput.length - 1;  index >= 0 ; index-- ){
    newStringReverse = newStringReverse + stringInput[index]
}

console.log(`String "${stringInput}" reverse: ${newStringReverse}`);