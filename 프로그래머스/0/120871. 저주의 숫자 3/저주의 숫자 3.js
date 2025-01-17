function solution(n) {
    let i = 1;
    let count = 1;
    
    while(i !== n || (count % 3 === 0 || `${count}`.includes('3'))){
        if(count % 3 === 0 || `${count}`.includes('3')) 
            count += 1;
        else {
            i += 1;
            count += 1;
            }
    }
    
    return count;
}