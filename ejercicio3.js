function getOddNumbersUpTo(maxNumber) {
    let odds = [];

    for (let i = 1; i <= maxNumber; i += 2) {
        odds.push(i);
    }

    return odds;
}

let result = getOddNumbersUpTo(100);

console.log(result);
