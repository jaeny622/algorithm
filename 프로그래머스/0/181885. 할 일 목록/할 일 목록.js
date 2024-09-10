function solution(todo_list, finished) {
    let answer = [];
    finished.map((status,index)=>{
        if(!status) answer.push(todo_list[index]);
    })
    return answer;
}