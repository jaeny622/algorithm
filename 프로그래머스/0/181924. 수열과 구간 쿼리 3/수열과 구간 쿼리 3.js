function solution(arr, queries) {
    queries.map((query)=>{
        let temp = -1;
        temp = arr[query[0]];
        arr[query[0]] = arr[query[1]];
        arr[query[1]] = temp;
    });
    
    return arr;
}