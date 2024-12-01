function solution(s) {
    let answer = 0;
    let obj = {};
    let first = '';
    
    s.split('').map((item)=>{
        if(Object.keys(obj).length === 0 || item === first){
            obj[item] = (obj[item] || 0) + 1;
            first = item;
        }
        else if(item !== first) obj['another'] = (obj['another'] || 0) + 1;

        
        if(Object.keys(obj).length === 2 && obj[first] === obj['another']){
            answer += 1;
            obj = {};     
        }
        
    });
    
    return s.length % 2 !== 0 || Object.keys(obj).length !== 0 ? answer+1 : answer;
}