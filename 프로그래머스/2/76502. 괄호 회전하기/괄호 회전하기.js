function solution(s) {
    var answer = 0;
    let str = s; 
    const stack = [];
    
    if(s.length % 2 === 1) return 0;
    
    for(let i = 0; i < s.length; i++){
       str = `${str.substr(1)}${str.substr(0,1)}`;
        let flag = true;
        for(let item of str){
            if(item === '[' || item ==='(' || item ==='{') stack.push(item);
            else {
                const last = stack.pop();
                if(last === '[' && item === ']') continue;
                if(last === '(' && item === ')') continue;
                if(last === '{' && item === '}') continue;
                
                flag = false;
                break;
            }
        };
        if(flag) answer+=1;
    }
    
    return answer;
}