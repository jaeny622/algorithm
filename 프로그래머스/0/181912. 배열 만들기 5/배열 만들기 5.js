function solution(intStrs, k, s, l) {
    const substring_arr = intStrs.map((str)=> +str.substr(s,l));
    return substring_arr.filter((item)=>item > k);
}