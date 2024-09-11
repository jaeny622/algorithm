function solution(num_list) {
    let answer = 0;
    const num_list_length_condition = num_list.length <= 10 ? false : true;
    
    if(!num_list_length_condition){
        answer = 1;
        num_list.map((num)=>{
            answer *= num;
        })
    }else{
        num_list.map((num)=>{
            answer += num;
        })    
    }
    
    return answer;
}