function solution(t, p) {
    let answer = 0;
    const numbers = [];
    const length = p.length;
    for(let i = 0; i <= t.length-length; i++){
        numbers.push(+t.substring(i,i+length));
    }
    
    console.log(numbers);
    
    numbers.map((number)=>{
        if(number <= +p) answer += 1;
    });
    
    return answer;
}