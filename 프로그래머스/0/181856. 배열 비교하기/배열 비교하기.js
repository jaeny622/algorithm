function solution(arr1, arr2) {
    if(arr1.length === arr2.length){
        let arr1_sum = 0;
        let arr2_sum = 0;
        
        arr1.map((item)=>arr1_sum+=item);
        arr2.map((item)=>arr2_sum+=item);
        
        if(arr1_sum===arr2_sum) return 0;
        
        return arr1_sum > arr2_sum ? 1 : -1;
    }
    
    return arr1.length > arr2.length ? 1 : -1;
}