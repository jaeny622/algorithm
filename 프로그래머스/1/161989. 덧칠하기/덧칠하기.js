function solution(n, m, section) {
    let answer = 0;
    let painted = 0;
    
    section.map((item)=>{
        if(painted < item){
            answer += 1;
            painted = item + m - 1;
        }
        
    })
    

    return answer;
}