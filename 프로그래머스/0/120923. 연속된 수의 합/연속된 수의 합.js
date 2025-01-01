function solution(num, total) {
    const answer = [];
    
    const number = (2*total + num - Math.pow(num,2)) / (2 * num);
    
    for(let i = number; i < number+num; i++){
        answer.push(i);
    }
    
    return answer;
}