function solution(arr, k) {
    let answer = [];

    arr.map((item)=>{
        if(!answer.includes(item) && answer.length < k) answer.push(item);
    });
    
    return answer.length < k ? [...answer, ...[...new Array(k-answer.length)].map((_,i)=>-1)] : answer;
}