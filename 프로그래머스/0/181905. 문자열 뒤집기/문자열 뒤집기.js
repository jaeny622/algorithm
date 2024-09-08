function solution(my_string, s, e) {
    let answer = my_string.substring(0,s);
    
    console.log(answer);
    
    for(let i = e; i > s-1; i-=1){
        answer += my_string[i];
    }
    
    return answer+my_string.substring(e+1,my_string.length);
}