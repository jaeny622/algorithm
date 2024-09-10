function solution(str_list) {
    let answer = [];

    let lidx = -1;
    let ridx = -1;
    for(let i = 0; i < str_list.length; i++){
        if(str_list[i] === "l"){
            lidx = i;
            break;
        }else if (str_list[i] === "r"){
            ridx = i;
            break;
        }
    }

    const length = lidx !== -1 ? lidx : str_list.length;
    const startIdx = lidx !== -1 ? 0 : ridx+1;
    
    
    for(let i = startIdx; i < length; i++){
        answer.push(str_list[i]);
    }
    
    return !str_list.includes("l") && !str_list.includes("r") ? [] : answer;
}