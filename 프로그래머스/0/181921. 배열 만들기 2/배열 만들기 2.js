function solution(l, r) {
    let answer = [];
    
    let value = 0;
    let idx = 1;
    
    while(value <= r){
        value = parseInt(idx.toString(2)) * 5;
        if(value>=l && value<=r) answer.push(value);
        
        idx += 1;
    }
    
    
    return answer.length === 0 ? [-1] : answer;
}