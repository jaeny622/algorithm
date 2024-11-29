function solution(lines) {
    const arr = new Array(200).fill(0);
    
    lines.map((line)=>{
        for(let i = line[0]; i < line[1]; i++){
            arr[i+100] += 1;
        }
    });
    
    return arr.filter((item)=>item !== 1  && item !== 0).length;
}