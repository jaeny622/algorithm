function solution(food) {
    let answer = '';
    food.map((item,idx)=>{
        if(idx!==0){
            for(let i = 0; i < Number.parseInt(item/2); i++){
                answer+=idx;
            }
        }
    });
    answer = `${answer}0${answer.split('').reverse().join('')}`;
    return answer;
}