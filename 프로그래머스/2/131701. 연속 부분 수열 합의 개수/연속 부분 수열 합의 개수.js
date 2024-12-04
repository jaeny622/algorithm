function solution(elements) {
    const set = new Set();

    const getSum = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) sum += arr[i];
        return sum;
    }
    
    const length = elements.length;
    
    for(let i = 1; i <= length; i++){
        for(let j = 0; j < length; j++){
            if (j + i > length) set.add(getSum(elements.slice(j, length)) + getSum(elements.slice(0, j+i-length)));
            else set.add(getSum(elements.slice(j, j+i)))
        }
    }

    return set.size;
}