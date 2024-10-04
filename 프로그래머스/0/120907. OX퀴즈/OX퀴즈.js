function solution(quiz) {
    const answer = [];
    quiz.map((item)=>{
        const splitArr = item.split('=');
        if(splitArr[0].includes(' - ')){
            const arr = splitArr[0].split(' - ');
            if(+arr[0]-+arr[1] === +splitArr[1]) answer.push("O");
            else answer.push("X")
        }else if(splitArr[0].includes(' + ')){
            const arr = splitArr[0].split(' + ');
            if(+arr[0] + +arr[1] === +splitArr[1]) answer.push("O");
            else answer.push("X")
        }
    })
    return answer;
}