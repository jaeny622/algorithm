function solution(common) {
    let geo = common[2]-common[1] !== common[1]-common[0];
    
    if(geo) return common[common.length-1] * (common[1]/common[0]);
    else return common[common.length-1] + (common[1]-common[0]);
}