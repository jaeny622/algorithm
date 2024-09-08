function solution(num_list) {
    let multiple = 1;
    let sum = 0;
    
    num_list.map((num)=> {
        multiple *= num;
        sum += num;
    })
    
    return multiple < Math.pow(sum,2) ? 1 : 0;
}