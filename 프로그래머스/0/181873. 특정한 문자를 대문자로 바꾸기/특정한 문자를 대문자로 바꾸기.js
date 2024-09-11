function solution(my_string, alp) {
    let answer = '';
    const my_string_arr = my_string.split("");
    
    my_string_arr.map((string)=>{
        if(string===alp) answer += string.toUpperCase();
        else answer += string;
    })
    
    return answer;
}