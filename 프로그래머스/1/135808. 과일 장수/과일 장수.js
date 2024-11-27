function solution(k, m, score) {
    let answer = 0;
    
    score.sort((a,b)=>b-a);
    
    for(let i = 0; i < score.length; i+=m){
        const temp = score.slice(i,i+m);
        if(temp.length === m) answer+=temp[m-1]*m;
    }
    
    return answer;
}