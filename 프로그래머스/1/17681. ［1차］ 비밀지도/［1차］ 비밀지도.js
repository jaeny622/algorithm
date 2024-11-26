function modiArr(arr,n){
    return arr.map((item,idx)=>{
        let str = '';
        for(let i = 0 ; i < n-item.length; i++) {
            str += ' ';
        }
        
        for(let i = 0; i < item.length; i++){
            str += item[i]==='1' ? '#' : ' '
        };
        return str;
    })
}

function solution(n, arr1, arr2) {
    var answer = [];
    
    const bin1 = arr1.map((item)=> item.toString(2));
    const bin2 = arr2.map((item)=> item.toString(2));
    
    const modiBin1 = modiArr(bin1,n);
    const modiBin2 = modiArr(bin2,n);
    
    modiBin1.map((item,idx)=>{
        let str = '';
        for(let i = 0; i < item.length; i++){
            // 모두 빈 경우
            if(item[i] === ' ' && modiBin2[idx][i] === ' ') str += ' '; 
            // 그 외
            else str += '#';
        }
        answer.push(str);
    })

    
    return answer;
}