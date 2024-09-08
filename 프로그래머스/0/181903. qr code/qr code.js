function solution(q, r, code) {    
    return code.split('').filter((item,idx)=> idx%q===r).join('');
}