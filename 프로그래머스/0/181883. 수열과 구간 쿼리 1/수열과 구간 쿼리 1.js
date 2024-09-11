function solution(arr, queries) {
    var answer = arr;
    queries.map((query)=>{
        answer.map((item,index)=>{
           if(query[0]<=index && index<=query[1]) return answer[index]=item+1;
           return item;
        });
        }
    );
    return answer;
}