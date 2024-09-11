function solution(myString, pat) {
    let answer = 0;
    
    let idx = -1;
    while(myString.length-1 !== idx && myString.length-pat.length !== idx){
        idx++;
        if(myString.substring(idx,idx+pat.length) === pat) answer += 1;
        
    }
    
    return answer;
}