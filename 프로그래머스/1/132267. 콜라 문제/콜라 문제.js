function solution(a, b, n) {
    var answer = 0;
    let coke = n;
    let rest = 0;
    while(coke >= a){
        rest = coke % a;
        coke = Number.parseInt(coke / a) * b;
        answer += coke;
        
        if(rest+coke >= a) coke += rest;
    }
    return answer;
}