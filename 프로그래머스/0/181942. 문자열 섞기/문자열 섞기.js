function solution(str1, str2) {
    let answer = '';
    str1.split("").map((str,index)=>{
        answer += str+str2.charAt(index);
    })
    return answer;
}