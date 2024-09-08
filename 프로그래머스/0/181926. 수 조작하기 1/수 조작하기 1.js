function solution(n, control) {
    const control_array = control.split("");
    
    control_array.map((control)=>{
        if(control === 'w') n+=1;
        else if(control === 's') n-=1;
        else if(control === 'd') n+=10;
        else n-=10;
    })
    
    return n;
}