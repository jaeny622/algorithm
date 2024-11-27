function getMeasure(num){
    let count = 1;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num%i === 0) {
            count+=1;
            if(i*i != num) count += 1;
        }
    }
    return count+1;
}

function solution(number, limit, power) {
    let answer = 1;
    
    for(let i = 2; i <= number; i++){
        const count = getMeasure(i);
        if(count > limit) answer+=power;
        else answer+=count;
    }
    
    return answer;
}