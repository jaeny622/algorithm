function solution(X, Y) {
    var answer = '';
    const obj = {}
    
    for(let item of X){
        obj[item] = (obj[item] || 0) +1;
    }
    
    for (let item of Y){
        if(!obj[item]) continue;
        answer += item;
        obj[item] -= 1;
    }
 
    if(answer === '') return '-1';
    else if(+answer === 0) return '0';
    else return answer.split('').sort((a,b)=>b-a).join('');         
}