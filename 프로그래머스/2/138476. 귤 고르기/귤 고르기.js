function solution(k, tangerine) {
    let answer = 0;
    const map = new Map();
    tangerine.map((item)=>{
        if(map.has(item))
            map.set(item,map.get(item)+1);
        else
            map.set(item,1);      
    });
    
    const arr = [...map]
    arr.sort((a,b)=>b[1]-a[1]);
    
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(sum < k){
            sum+=arr[i][1];
            answer+=1;
        }else break;
    }
    
    return answer;
}