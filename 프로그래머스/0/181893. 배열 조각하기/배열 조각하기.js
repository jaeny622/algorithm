function solution(arr, query) {
    var answer = arr;
    
    query.map((item,idx)=>{
        if(idx%2 === 0) answer = answer.slice(0,item+1);
        else answer = answer.slice(item);
    })
    
    return answer;
}