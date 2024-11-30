function solution(ingredient) {
    let answer = 0;
    let stack = [];

    for(let item of ingredient){
        stack.push(item);
        
        if(stack.length >= 4){
            const str = stack.slice(-4).join('');
            if(str === '1231') {
                answer += 1;
                stack.splice(-4);
            }
        }
    }
    
    console.log(stack);
    
    return answer;
}