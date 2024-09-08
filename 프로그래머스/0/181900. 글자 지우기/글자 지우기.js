function solution(my_string, indices) {
    let answer = my_string;
    
    indices.map((indice)=> {
        answer = answer.substring(0,indice) + " " + answer.substring(indice+1,my_string.length);
      })
    
    return answer.replaceAll(/ /g, '');
}