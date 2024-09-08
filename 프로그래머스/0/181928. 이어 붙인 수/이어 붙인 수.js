function solution(num_list) {
    let even_sum = '';
    let odd_sum = '';
    
    num_list.map((num)=>{
        if(num%2!==0) odd_sum += num;
        else even_sum += num;
    });
    
    return +even_sum + +odd_sum;
}