function solution(n, k) {
    let answer = [];
    
    for(let i=1; i<=n; i++){
        if(k*i > n) break;
        answer.push(k*i);
    }
    
    return answer;
}