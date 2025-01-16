function solution(score) {
    const avg = score.map((grade)=>(grade[0]+grade[1])/2);
    const sortAvg = avg.slice().sort((a,b)=>b-a);
    
    return avg.map((item)=>sortAvg.indexOf(item)+1);
}