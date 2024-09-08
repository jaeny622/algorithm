function solution(numLog) {
    var answer = '';
    for(let i = 1; i < numLog.length; i++){
        let flag = '';
       switch (numLog[i]-numLog[i-1]){
           case 1 : 
               flag = 'w'; break;
           case -1 : 
               flag = 's'; break;
           case 10 : 
               flag = 'd'; break;
           case -10 : 
               flag = 'a'; break;     
       }
        answer+=flag;
    }
    return answer;
}