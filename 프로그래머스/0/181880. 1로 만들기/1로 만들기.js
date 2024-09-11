function solution(num_list) {
    var answer = 0;
    
    num_list.map((num)=>{
        let newNum = num;
        let count = 0;
        
        while(newNum !== 1){
            if(newNum % 2 === 0) newNum = newNum/2;
            else newNum = (newNum-1)/2;
            
            count++;
        }
        
        answer += count;
    })
    
    return answer;
}