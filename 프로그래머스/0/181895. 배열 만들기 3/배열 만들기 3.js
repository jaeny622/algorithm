function solution(arr, intervals) {
    const modified_arr = intervals.map((interval)=>{
        const new_arr = arr.slice();
        return new_arr.splice(interval[0],interval[1]-interval[0]+1);
     });
    
    return modified_arr.reduce((prev, next) => prev.concat(next));
}