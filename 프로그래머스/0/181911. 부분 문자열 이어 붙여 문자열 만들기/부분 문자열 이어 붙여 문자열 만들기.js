function solution(my_strings, parts) {
    var answer = '';
    parts.map((part,index)=>{
        answer+=my_strings[index].substring(part[0],part[1]+1);
    })
    return answer;
}