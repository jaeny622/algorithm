function solution(n, w, num) {
    var answer = 1;
    
    const boxArr = [];
    for(let i = 1; i <= n; i += w) {
        const even = boxArr.length % 2 === 0;
        const arr = [];
        if(even) {
            for(let j = 0; j < w; j++) {
                arr.push(i + j <= n ? i + j : 0);   
            }   
        } else {
            for(let j = w-1; j >= 0; j--) {
                arr.push(i + j <= n ? i + j : 0);   
            }   
        }
        boxArr.push(arr);
    }
    
    const rowIdx = boxArr.findIndex(row => row.includes(num)); 
    const colIdx = boxArr[rowIdx].indexOf(num);
    
    for(let i = rowIdx + 1; i < boxArr.length; i++) {
        if(boxArr[i][colIdx] && boxArr[i][colIdx] !== 0) {
            answer += 1;
        }
    }
    return answer;
}