function solution(arr, n) {
    let answer = [];
    if(arr.length%2===0){
        arr.map((item,index)=>{ 
            if(index%2!==0) answer.push(item+n);
            else answer.push(item);
        });
    }else{
        arr.map((item,index)=>{ 
            if(index%2===0) answer.push(item+n);
            else answer.push(item);
        });
    }
    return answer;
}