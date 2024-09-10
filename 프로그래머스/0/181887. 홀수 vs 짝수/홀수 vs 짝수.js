function solution(num_list) {
    let even_index_sum = 0;
    let odd_index_sum = 0;
    
    for(let i = 0; i < num_list.length; i++){
        if(i%2===0) even_index_sum+=num_list[i];
        else odd_index_sum+=num_list[i];
    }
    
    return even_index_sum === odd_index_sum ? even_index_sum : even_index_sum < odd_index_sum ? odd_index_sum : even_index_sum;
}