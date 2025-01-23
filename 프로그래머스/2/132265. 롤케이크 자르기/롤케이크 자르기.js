function solution(topping) {
    let answer = 0;
    // 철수
    const slice1 = new Map();
    // 동생
    const slice2 = new Map();
  
    for(let item of topping){
        slice1.has(item) ? slice1.set(item, slice1.get(item)+1) : slice1.set(item,1);
    }
    
    for(let item of topping){
         slice2.has(item) ? slice2.set(item, slice2.get(item)+1) : slice2.set(item,1);
        // slice1에서 slice2에 토핑을 준 것으로 판단하므로 존재하면 갯수 -1 혹은 없앰
        slice1.get(item) !== 1 ? slice1.set(item, slice1.get(item)-1) : slice1.delete(item);
        
        if(slice1.size === slice2.size) answer+=1;
        if(slice2.size > slice1.size) break;
    }
    
    return answer;
}