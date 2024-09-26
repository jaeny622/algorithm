const setNotSafe = (xSIdx, xEIdx, ySIdx, yEIdx) =>{
    const result = []; 
    for(let i = xSIdx; i <= xEIdx; i++){
       for(let j = ySIdx; j <= yEIdx; j++){
           result.push(`${i},${j}`);
       } 
    }
    return result;
}


function solution(board) {
    const max = board.length;
    const notSafeArr = [];

    
    board.map((bdItem,bdIdx)=>{
        bdItem.map((item,idx)=>{
            if(item === 1){
                notSafeArr.push(...setNotSafe(bdIdx-1 >= 0 ? bdIdx-1 : 0, bdIdx+1 < max ? bdIdx+1 : max-1, idx-1 >= 0 ? idx-1 : 0, idx+1 < max ? idx+1 : max-1));
            }
        })
    })
    
    const newSet = new Set([...notSafeArr]);
    console.log(newSet)
    const safe = Math.pow(max, 2) - [...newSet].length
    
    return safe < 0 ? 0 : safe ;
}