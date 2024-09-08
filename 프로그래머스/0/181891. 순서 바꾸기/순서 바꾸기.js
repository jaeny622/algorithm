function solution(num_list, n) {
    const splice_arr = num_list.splice(0,n);
    return num_list.concat(splice_arr);
}