function solution(numbers) {
    let answer = [];
    let stack = [];
    let max = 0;
    
    for(let i = numbers.length-1; i >= 0; i--){
        if(max <= numbers[i]){
            max = numbers[i];
            answer.push(-1);
            stack = [];
            stack.push(numbers[i]);
        }else{
            let j = 0;
            while(true){
                if(stack[j] > numbers[i]){
                    answer.push(stack[j]);
                    stack.unshift(numbers[i]);
                    break;
                } else stack.shift();
            }
        }
    }
    
    return answer.reverse();
}