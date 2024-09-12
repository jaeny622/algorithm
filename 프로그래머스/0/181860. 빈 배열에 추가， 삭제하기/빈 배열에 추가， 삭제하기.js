function solution(arr, flag) {
    let answer = [];
    
        arr.map((item,itemIdx)=>{
            if(itemIdx===0) 
                answer = flag[itemIdx] ? Array(item*2).fill(item) : [];
            else if(flag[itemIdx]) answer.push(...Array(item*2).fill(item));
            else answer.splice(answer.length - (answer.length>=item ? item : answer.length));
                
            
        })
    
    return answer;
}