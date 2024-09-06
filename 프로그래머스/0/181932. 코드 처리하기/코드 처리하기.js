function solution(code) {
    let answer = '';
    let mode = 0;
    let codeIdx = 0;
    while(codeIdx < code.length){
        if(mode === 0){
            if(code[codeIdx] !== '1' && codeIdx%2 === 0) answer += code[codeIdx]
            else if(code[codeIdx] === '1') mode = 1;
        }else{
            if(code[codeIdx] !== '1' && codeIdx%2 !== 0) answer += code[codeIdx]
            else if(code[codeIdx] === '1') mode = 0;
        }
        codeIdx += 1;
    }
    return answer === '' ? "EMPTY" : answer;
}