function solution(arr, queries) {
    let answer = [];
    
    queries.map((query)=>{
        const modifyArr = arr.slice(query[0],query[1]+1).filter(item=>item > query[2]);
        if(modifyArr.length === 0) answer.push(-1);
        else answer.push(Math.min.apply(null,modifyArr));
    })
    
    return answer;
}