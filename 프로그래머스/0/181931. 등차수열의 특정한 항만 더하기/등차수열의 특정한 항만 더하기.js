function solution(a, d, included) {
    var answer = 0;
    const arr = included.map((item,index)=>{
        if(index!==0){
           a=a+d;   
        }
        if(item) answer += a;
    })
    return answer;
}