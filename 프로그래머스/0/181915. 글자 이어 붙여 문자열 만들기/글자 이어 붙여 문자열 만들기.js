function solution(my_string, index_list) {
    let answer = '';
    const my_string_array = my_string.split("");
    
    index_list.map((index)=>answer += my_string_array[index]);
    
    
    return answer;
}