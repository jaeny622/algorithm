function solution(my_string, m, c) {
    const arr = [];
    for(let i = 0; i < my_string.length; i+=m ){
        arr.push(my_string.substring(i,i+m));
    }
    
    return arr.map((item)=>item.charAt(c-1)).join('');
}