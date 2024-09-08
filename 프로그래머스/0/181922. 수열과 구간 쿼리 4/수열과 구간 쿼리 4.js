function solution(arr, queries) {
    
    queries.map((query)=>
        arr.map((item,idx)=>{
            if(idx % query[2] === 0 && idx >= query[0] && idx <= query[1]) {
                arr[idx]+=1;
            }
        })
    )
    
    
    return arr;
}