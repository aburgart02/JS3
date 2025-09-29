function countingSort(numbers) {
    if (numbers.length <= 1)
        return numbers;

    let max = Math.max(...numbers);
    let array = new Array(max + 1).fill(0);

    for (let num of numbers)
        array[num]++;

    let result = [];
    for (let i = 0; i < array.length; i++) {
        while (array[i] > 0) {
            result.push(i);
            array[i]--;
        }
    }

    return result;
}

console.log(countingSort([12, 33, 2, 87, 216, 7, 5, 367]))