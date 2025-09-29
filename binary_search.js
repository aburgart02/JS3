function binarySearch(number, array) {
    if (array.length === 0)
        return -1;

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let center = Math.floor((right + left) / 2);
        if (number <= array[center])
            right = center;
        else
            left = center + 1;
    }

    if (array[left] === number)
        return left;

    return -1;
}

const list = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
console.log(binarySearch(34, list));