function solution(keymap, targets) {
    var answer = [];
    
    targets.map((target)=>{
        let count = 0;
        const splitArr = target.split('');
        for(let i = 0; i < splitArr.length; i++){
            const idxArr = keymap.map((key)=>key.indexOf(splitArr[i]));
            const arr = idxArr.filter((idx)=>idx>=0);
            if(arr.length === 0){
                 count = -1;
                 break;
            }
            else count += Math.min(...idxArr.filter((idx)=>idx>=0))+1;                 
        }
        if(count < 0) answer.push(-1);
        else answer.push(count);
    });
    
    
    
    return answer;
}