function solution(s) {
    let modiStr = s;
    let zeroCount = 0;
    let count = 1;
    
    modiStr.split('').map((char)=>{
        if(char === '0') zeroCount+=1;
    });
    
    while(modiStr.replaceAll('0','').length.toString(2)!=='1'){
        modiStr = modiStr.replaceAll('0','').length.toString(2);
        count+=1;
        
        modiStr.split('').map((char)=>{
            if(char === '0') zeroCount+=1;
        });
    
    }
    
    return [count, zeroCount];
}