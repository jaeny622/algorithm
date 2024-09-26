function solution(dots) {
    const set = [{x1:2,x2:3},{x1:1,x2:3},{x1:1,x2:2}];
    
    for(let i = 0; i < 3; i++){
        if((dots[i+1][1]-dots[0][1])/(dots[i+1][0]-dots[0][0]) === (dots[set[i].x1][1]-dots[set[i].x2][1])/(dots[set[i].x1][0]-dots[set[i].x2][0])) return 1;
    }
        
    return 0;
}