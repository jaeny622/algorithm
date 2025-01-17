function solution(n) {
    return fibonacci(n);
}

function fibonacci(n){
    const arr = new Array(n+1).fill(0);
    arr[0] = 1;
    arr[1] = 1;
    
    for(let i = 2; i < arr.length; i++){
        arr[i] = (arr[i-2] + arr[i-1])%1234567;
    }
    return arr[n];
}