function solution(arr) {
    var answer = arr;
    
    let idx = 0;
    let flag = true;
    let restLength = 0;
    
    while(flag){
        if(arr.length === 2**idx || arr.length < 2**idx) {
            flag = false;
            restLength = 2**idx-arr.length;
        } else idx++;
    }
    
    answer.push(...Array(restLength).fill(0));
    
    return answer;
}