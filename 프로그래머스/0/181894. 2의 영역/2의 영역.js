function solution(arr) {
    const answer = arr.map((item)=>item);
    
    const firstIdx = answer.findIndex((item) => item === 2);
    let lastIdx = 0;
    
    while(answer.findIndex((item) => item === 2) !== -1){
     const idx = answer.findIndex((item) => item === 2);
     answer[idx] = 0;
        
     if(answer.findIndex((item) => item === 2) === -1) lastIdx = idx; 
    }    
    
    return firstIdx === -1 ? [-1] : arr.slice(firstIdx,lastIdx+1);
}