function solution(myStr) {
    const answer = myStr.replaceAll(/[a|b|c]/g,'%').split('%').filter((str)=>str!=='');
    
    return answer.length === 0 ? ['EMPTY'] : answer;
}