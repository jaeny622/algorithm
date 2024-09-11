function solution(strArr) {
    let answer = [];
    strArr.map((str)=> {
        if(!str.includes("ad")) answer.push(str);
    })
    return answer;
}