function solution(number) {
    var answer = 0;
    const length = number.length
    for(let i = 0; i < length-2; i++){
        for(let j = i+1; j < length-1; j++){
            for( let k = j+1; k < length; k++){
                if(number[i]+number[j]+number[k] === 0) answer+=1;
            }
        }
    }
    return answer;
}