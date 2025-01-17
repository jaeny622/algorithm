function solution(arr) {
    let arrCopy = arr.slice();
    let count = 0;
    let flag = true;
    
    if(arr.length === 1) return 0;

    while(flag){
        let flg = true;
        const newArr = arrCopy.slice();
        newArr.map((item,idx)=>{
            if(item >= 50 && item % 2 === 0) newArr[idx] = item / 2;
            else if(item < 50 && item % 2 === 1) newArr[idx] = (item)*2 + 1;
        });
        
        
        for(let i = 0; i < newArr.length; i++){
            if(newArr[i] !== arrCopy[i]) {
                flg = false; 
                break;
            }
        }
        
        if(!flg) {
            arrCopy = newArr;
            count += 1;
        }
        else flag = false;
    }
   
    return count;
}