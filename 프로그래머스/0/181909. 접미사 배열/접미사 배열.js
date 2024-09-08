function solution(my_string) {
    const my_string_arr = my_string.split('').map((string,index)=>
        my_string.substring(index,my_string.length)
    )
    return my_string_arr.sort();
}