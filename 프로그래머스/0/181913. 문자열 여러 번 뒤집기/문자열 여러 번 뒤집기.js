function solution(my_string, queries) {
    var answer = my_string;
    
    queries.map((query)=>{
       const modifyString = answer.substring(query[0],query[1]+1).split('');
       answer = answer.substring(0,query[0]) + modifyString.reverse().join('') + answer.substring(query[1]+1,answer.length);
    })
    
    return answer;
}