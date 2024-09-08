function solution(num_list) { 
    const last_num = num_list[num_list.length-1];
    const second_last_num = num_list[num_list.length-2];
    
    let answer = num_list.slice();
    
    second_last_num < last_num ? answer.push(last_num-second_last_num) : answer.push(last_num*2);
    
    return answer;
}