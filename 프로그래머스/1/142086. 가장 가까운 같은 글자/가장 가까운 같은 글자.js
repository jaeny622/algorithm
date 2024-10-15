function solution(s) {
    var answer = [];
    
    s.split('').map((char,idx)=>{
        const findIdx = s.substring(0,idx).lastIndexOf(char);
        if(findIdx !== -1) answer.push(idx-findIdx);
        else answer.push(findIdx);
    })
    return answer;
}