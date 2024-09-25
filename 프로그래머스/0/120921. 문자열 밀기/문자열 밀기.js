function solution(A, B) {
    var answer = 0;
    let str = A;
    const length = A.length;
    
    for(let i=0; i<length; i++){
        if(str===B) return i;
        else str = str.substring(length-1,length) +str.substring(0,length-1);
    }
    
    return -1;
}