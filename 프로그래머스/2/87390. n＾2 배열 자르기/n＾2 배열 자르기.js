function solution(n, left, right) {
    const arr = [];
    for(let i = left; i <= right; i++){
        arr.push(i%n > i/n ? (i%n)+1 : Number.parseInt(i/n)+1);
    }
    return arr;
}