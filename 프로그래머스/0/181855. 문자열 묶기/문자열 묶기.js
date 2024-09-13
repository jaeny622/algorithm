function solution(strArr) {
    let answer = 0;
    
    const lengthArr = strArr.map((str)=>str.length)

    
    for(let i = 1; i <= Math.max(...lengthArr); i+=1){
        const arr = strArr.filter((item) => item.length === i);
        
        if(answer < arr.length) answer = arr.length;
    }
        
    
    return answer;
}