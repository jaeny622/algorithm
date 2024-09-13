function solution(num_list) {
    num_list = num_list.sort((a,b)=>{
        if(a>b) return 1;
        else if(a===b) return 0;
        else return -1;
    })
    
    return num_list.splice(0,5);
}